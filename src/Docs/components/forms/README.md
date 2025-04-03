# Form Components

A collection of form components for building accessible and type-safe forms.

## Components

### Input Controls

- [TextField](./TextField.md) - Text input component
- [Checkbox](./Checkbox.md) - Checkbox input component
- [Radio](./Radio.md) - Radio button component
- [Switch](./Switch.md) - Toggle switch component

## Form Best Practices

### Accessibility

- Use proper labels for all form controls
- Provide error messages that are announced by screen readers
- Maintain proper focus management
- Use fieldsets and legends for grouping controls

### Validation

- Provide immediate feedback for validation errors
- Use clear, concise error messages
- Show validation state visually
- Support both client and server-side validation

### Layout

- Group related fields together
- Align labels and fields consistently
- Use appropriate spacing between fields
- Make forms responsive

### User Experience

- Preserve user input when possible
- Show loading states during submission
- Provide clear success/error feedback
- Support keyboard navigation

## Example Usage

```tsx
import { TextField, Checkbox, Radio, Switch } from "@uikit/forms";

function MyForm() {
  return (
    <form>
      <TextField label="Username" placeholder="Enter username" required />

      <TextField
        label="Password"
        type="password"
        placeholder="Enter password"
        required
      />

      <Checkbox label="Remember me" />

      <Radio.Group label="Notification preference" name="notifications">
        <Radio value="email">Email</Radio>
        <Radio value="push">Push notifications</Radio>
        <Radio value="none">None</Radio>
      </Radio.Group>

      <Switch label="Enable dark mode" />

      <Button type="submit" color="Primary">
        Submit
      </Button>
    </form>
  );
}
```

## Form Validation

All form components support validation through:

- Required field validation
- Pattern matching
- Custom validation functions
- Integration with form libraries

Example with validation:

```tsx
<TextField
  label="Email"
  type="email"
  required
  pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
  error={errors.email}
  helperText="Enter a valid email address"
/>
```

## Styling

Form components use consistent styling tokens from the theme:

- Colors for different states (default, hover, focus, error)
- Typography for labels and helper text
- Spacing for layout and padding
- Animation timings for transitions

## Controlled vs Uncontrolled

All form components support both controlled and uncontrolled usage:

```tsx
// Controlled
<TextField
  value={value}
  onChange={handleChange}
/>

// Uncontrolled
<TextField
  defaultValue="Default"
/>
```
