import React, { cloneElement, FunctionComponent, KeyboardEvent, MouseEvent, ReactNode, useId, useRef } from 'react'
// @ts-ignore
import cx from 'clsx'
import { getTabsCount as getTabsCountHelper } from '../Common/Helpers/Tabs/count'
import { deepMap } from '../Common/Helpers/Tabs/childrenDeepMap'
import { isTab, isTabList, isTabPanel } from '../Common/Helpers/Tabs/elementTypes'

interface TabProps {
  children: ReactNode;
  direction?: 'rtl' | 'ltr';
  className?: string | string[] | object;
  disabledTabClassName?: string;
  disableUpDownKeys?: boolean;
  disableLeftRightKeys?: boolean;
  domRef?: (node: HTMLElement) => void;
  focus?: boolean;
  forceRenderTabPanel?: boolean;
  onSelect: (index: number, last: number, event: Event) => void;
  selectedIndex: number;
  selectedTabClassName?: string;
  selectedTabPanelClassName?: string;
  environment?: typeof window | null; // Plus précis que any
}

function isNode (node: HTMLElement | null): node is HTMLElement {
  return !!node && 'getAttribute' in node
}

function isTabNode (node: HTMLElement | null): node is HTMLElement {
  return isNode(node) && node.getAttribute('data-uitab') !== null
}

function isTabDisabled (node: HTMLElement | null): boolean {
  return isNode(node) && node.getAttribute('aria-disabled') === 'true'
}

let canUseActiveElement: boolean

function determineCanUseActiveElement (environment: Window | null | undefined) {
  const env = environment || (typeof window !== 'undefined' ? window : null)

  try {
    canUseActiveElement = !!(
      env &&
      env.document &&
      env.document.activeElement
    )
  } catch (e) {
    // Work around for IE bug when accessing document.activeElement in an iframe
    canUseActiveElement = false
  }
}

export const UncontrolledTabs: FunctionComponent<TabProps> = (props) => {
  const tabNodes = useRef<{ [key: string]: HTMLElement }>({})
  const tabIds = useRef<string[]>([])
  const ref = useRef<HTMLDivElement>(null)

  function getTabsCount () {
    const { children } = props
    return getTabsCountHelper(children)
  }

  function getTab (index: number): HTMLElement | null {
    return tabNodes.current[`tabs-${index}`] || null
  }

  function setSelected (index: number, event: Event) {
    // Check index boundary
    if (index < 0 || index >= getTabsCount()) return

    const {
      onSelect,
      selectedIndex
    } = props

    // Call change event handler
    onSelect(index, selectedIndex, event)
  }

  function getNextTab (index: number) {
    const count = getTabsCount()

    // Look for non-disabled tab from index to the last tab on the right
    for (let i = index + 1; i < count; i++) {
      if (!isTabDisabled(getTab(i))) {
        return i
      }
    }

    // If no tab found, continue searching from first on left to index
    for (let i = 0; i < index; i++) {
      if (!isTabDisabled(getTab(i))) {
        return i
      }
    }

    // All tabs are disabled, return index
    return index
  }

  function getPrevTab (index: number) {
    let i = index

    // Look for non-disabled tab from index to first tab on the left
    while (i--) {
      if (!isTabDisabled(getTab(i))) {
        return i
      }
    }

    // If no tab found, continue searching from last tab on right to index
    i = getTabsCount()
    while (i-- > index) {
      if (!isTabDisabled(getTab(i))) {
        return i
      }
    }

    // All tabs are disabled, return index
    return index
  }

  function getFirstTab () {
    const count = getTabsCount()

    // Look for non disabled tab from the first tab
    for (let i = 0; i < count; i++) {
      if (!isTabDisabled(getTab(i))) {
        return i
      }
    }

    return null
  }

  function getLastTab () {
    let i = getTabsCount()

    // Look for non disabled tab from the last tab
    while (i--) {
      if (!isTabDisabled(getTab(i))) {
        return i
      }
    }

    return null
  }

  function getChildren () {
    let index = 0
    const {
      children,
      focus,
      forceRenderTabPanel,
      selectedIndex,
      environment
    } = props

    tabIds.current = tabIds.current || []
    let diff = tabIds.current.length - getTabsCount()

    // Add ids if new tabs have been added
    const id = useId()
    while (diff++ < 0) {
      tabIds.current.push(`${id}-${tabIds.current.length}`)
    }

    // Map children to dynamically setup refs
    return deepMap(children, (child: any) => {
      let result = child

      // Clone TabList and Tab components to have refs
      if (isTabList(child)) {
        let listIndex = 0

        // Figure out if the current focus in the DOM is set on a Tab
        // If it is we should keep the focus on the next selected tab
        let wasTabFocused = false

        if (canUseActiveElement == null) {
          determineCanUseActiveElement(environment)
        }

        const env = environment || (typeof window !== 'undefined' ? window : undefined)
        if (canUseActiveElement && env) {
          wasTabFocused = React.Children.toArray(child.props.children)
            // @ts-ignore
            .filter(isTab)
            .some((tab, i) => env.document.activeElement === getTab(i))
        }

        result = cloneElement(child, {
          children: deepMap(child.props.children, (tab: any) => {
            const key = `tabs-${listIndex}`
            const selected = selectedIndex === listIndex

            const props = {
              tabRef: (node: HTMLElement) => {
                tabNodes.current[key] = node
              },
              id: tabIds.current[listIndex],
              selected,
              focus: selected && (focus || wasTabFocused)
            }

            listIndex++

            return cloneElement(tab, props)
          })
        })
      } else if (isTabPanel(child)) {
        const props = {
          id: tabIds.current[index],
          selected: selectedIndex === index,
          forceRender: undefined
        }

        if (forceRenderTabPanel) { // @ts-ignore
          props.forceRender = forceRenderTabPanel
        }

        index++

        result = cloneElement(child, props)
      }

      return result
    })
  }

  function handleKeyDown (e: KeyboardEvent) {
    const {
      direction,
      disableUpDownKeys,
      disableLeftRightKeys
    } = props

    if (isTabFromContainer(e.target as HTMLElement)) {
      let { selectedIndex: index } = props
      let preventDefault = false
      let useSelectedIndex = false

      if (
        e.code === 'Space' ||
        e.code === 'Enter'
      ) {
        preventDefault = true
        useSelectedIndex = false
        handleClick(e as unknown as MouseEvent)
      }

      if (
        (!disableLeftRightKeys && e.code === 'ArrowLeft') ||
        (!disableUpDownKeys && e.code === 'ArrowUp')
      ) {
        // Select next tab to the left, validate if up arrow is not disabled
        if (direction === 'rtl') {
          index = getNextTab(index)
        } else {
          index = getPrevTab(index)
        }
        preventDefault = true
        useSelectedIndex = true
      } else if (
        (!disableLeftRightKeys && e.code === 'ArrowRight') ||
        (!disableUpDownKeys && e.code === 'ArrowDown')
      ) {
        // Select next tab to the right, validate if down arrow is not disabled
        if (direction === 'rtl') {
          index = getPrevTab(index)
        } else {
          index = getNextTab(index)
        }
        preventDefault = true
        useSelectedIndex = true
      } else if (e.code === 'End') {
        // Select last tab (End key)
        index = getLastTab() ?? index
        preventDefault = true
        useSelectedIndex = true
      } else if (e.code === 'Home') {
        // Select first tab (Home key)
        index = getFirstTab() ?? index
        preventDefault = true
        useSelectedIndex = true
      }

      // This prevents scrollbars from moving around
      if (preventDefault) {
        e.preventDefault()
      }

      // Only use the selected index in the state if we're not using the tabbed index
      if (useSelectedIndex) {
        setSelected(index, e as unknown as Event)
      }
    }
  }

  function handleClick (e: MouseEvent) {
    let node = e.target as HTMLElement
    do {
      if (isTabFromContainer(node)) {
        if (isTabDisabled(node)) {
          return
        }

        const index = Array.from(node.parentNode!.children)
          // @ts-ignore
          .filter(isTabNode)
          .indexOf(node)
        setSelected(index, e as unknown as Event)
        return
      }
    } while ((node = node.parentNode as HTMLElement) != null)
  }

  function isTabFromContainer (node: HTMLElement) {
    // return immediately if the clicked element is not a Tab.
    if (!isTabNode(node)) {
      return false
    }

    // Check if the first occurrence of a Tabs container is this one.
    let nodeAncestor = node.parentElement
    do {
      if (nodeAncestor === ref.current) return true
      if (nodeAncestor?.getAttribute('data-uitabs')) break

      // @ts-ignore
      nodeAncestor = nodeAncestor.parentElement
    } while (nodeAncestor)

    return false
  }

  return (
    // @ts-ignore
    <div
      {...props}
      className={cx(props.className)}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      ref={ref}
      data-uitabs=""
    >
      {getChildren()}
    </div>
  )
}
