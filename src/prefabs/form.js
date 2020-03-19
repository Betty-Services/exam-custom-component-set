(() => ({
  name: 'Form',
  icon: 'FormIcon',
  category: 'FORM',
  structure: [
    {
      name: 'Form',
      options: [
        {
          value: '',
          label: 'Action',
          key: 'actionId',
          type: 'ACTION',
          configuration: {
            apiVersion: 'v1',
          },
        },
        {
          value: 'Thanks for submitting the form!',
          label: 'Success message',
          key: 'formSuccessMessage',
          type: 'TEXT',
        },
        {
          value: 'Failed to submit the form!',
          label: 'Error message',
          key: 'formErrorMessage',
          type: 'TEXT',
        },
        {
          value: ['0rem', '0rem', 'M', '0rem'],
          label: 'Outer space',
          key: 'outerSpacing',
          type: 'SIZES',
        },
      ],
      descendants: [
        {
          name: 'TextField',
          options: [
            {
              value: 'Label',
              label: 'Label',
              key: 'label',
              type: 'TEXT',
            },
            {
              value: 'text',
              label: 'Content format',
              key: 'type',
              type: 'CUSTOM',
              configuration: {
                as: 'DROPDOWN',
                dataType: 'string',
                allowedInput: [
                  { name: 'Text', value: 'text' },
                  { name: 'Number', value: 'number' },
                  { name: 'Password', value: 'password' },
                  { name: 'Email', value: 'email' },
                ],
              },
            },
            {
              value: [],
              label: 'Value',
              key: 'text',
              type: 'VARIABLE',
            },
            {
              value: '',
              label: 'Placeholder',
              key: 'placeholder',
              type: 'TEXT',
            },
            {
              value: false,
              label: 'Full width',
              key: 'fullWidth',
              type: 'TOGGLE',
            },
            {
              value: false,
              label: 'Required',
              key: 'required',
              type: 'TOGGLE',
            },
            {
              value: false,
              label: 'Disabled',
              key: 'disabled',
              type: 'TOGGLE',
            },
            {
              value: false,
              label: 'Multiline',
              key: 'multiline',
              type: 'TOGGLE',
            },
            {
              value: 4,
              label: 'Max Rows',
              key: 'rowsMax',
              type: 'NUMBER',
              configuration: {
                condition: {
                  type: 'SHOW',
                  option: 'multiline',
                  comparator: 'EQ',
                  value: true,
                },
              },
            },
            {
              label: 'Variant',
              key: 'variant',
              value: 'standard',
              type: 'CUSTOM',
              configuration: {
                as: 'BUTTONGROUP',
                dataType: 'string',
                allowedInput: [
                  { name: 'Standard', value: 'standard' },
                  { name: 'Outlined', value: 'outlined' },
                  { name: 'Filled', value: 'filled' },
                ],
              },
            },
            {
              value: 'medium',
              label: 'Size',
              key: 'size',
              type: 'CUSTOM',
              configuration: {
                as: 'BUTTONGROUP',
                dataType: 'string',
                allowedInput: [
                  { name: 'Medium', value: 'medium' },
                  { name: 'Small', value: 'small' },
                ],
              },
            },
            {
              value: false,
              label: 'Error',
              key: 'error',
              type: 'TOGGLE',
            },
            {
              value: 'none',
              label: 'Margin',
              key: 'margin',
              type: 'CUSTOM',
              configuration: {
                as: 'BUTTONGROUP',
                dataType: 'string',
                allowedInput: [
                  { name: 'None', value: 'none' },
                  { name: 'Dense', value: 'dense' },
                  { name: 'Normal', value: 'normal' },
                ],
              },
            },
            {
              value: '',
              label: 'Helper text',
              key: 'helperText',
              type: 'TEXT',
            },
            {
              value: '',
              label: 'Input',
              key: 'actionInputId',
              type: 'ACTION_INPUT',
            },
          ],
          descendants: [],
        },
        {
          name: 'TextField',
          options: [
            {
              value: 'Label',
              label: 'Label',
              key: 'label',
              type: 'TEXT',
            },
            {
              value: 'text',
              label: 'Content format',
              key: 'type',
              type: 'CUSTOM',
              configuration: {
                as: 'DROPDOWN',
                dataType: 'string',
                allowedInput: [
                  { name: 'Text', value: 'text' },
                  { name: 'Number', value: 'number' },
                  { name: 'Password', value: 'password' },
                  { name: 'Email', value: 'email' },
                ],
              },
            },
            {
              value: [],
              label: 'Value',
              key: 'text',
              type: 'VARIABLE',
            },
            {
              value: '',
              label: 'Placeholder',
              key: 'placeholder',
              type: 'TEXT',
            },
            {
              value: false,
              label: 'Full width',
              key: 'fullWidth',
              type: 'TOGGLE',
            },
            {
              value: false,
              label: 'Required',
              key: 'required',
              type: 'TOGGLE',
            },
            {
              value: false,
              label: 'Disabled',
              key: 'disabled',
              type: 'TOGGLE',
            },
            {
              value: false,
              label: 'Multiline',
              key: 'multiline',
              type: 'TOGGLE',
            },
            {
              value: 4,
              label: 'Max Rows',
              key: 'rowsMax',
              type: 'NUMBER',
              configuration: {
                condition: {
                  type: 'SHOW',
                  option: 'multiline',
                  comparator: 'EQ',
                  value: true,
                },
              },
            },
            {
              label: 'Variant',
              key: 'variant',
              value: 'standard',
              type: 'CUSTOM',
              configuration: {
                as: 'BUTTONGROUP',
                dataType: 'string',
                allowedInput: [
                  { name: 'Standard', value: 'standard' },
                  { name: 'Outlined', value: 'outlined' },
                  { name: 'Filled', value: 'filled' },
                ],
              },
            },
            {
              value: 'medium',
              label: 'Size',
              key: 'size',
              type: 'CUSTOM',
              configuration: {
                as: 'BUTTONGROUP',
                dataType: 'string',
                allowedInput: [
                  { name: 'Medium', value: 'medium' },
                  { name: 'Small', value: 'small' },
                ],
              },
            },
            {
              value: false,
              label: 'Error',
              key: 'error',
              type: 'TOGGLE',
            },
            {
              value: 'none',
              label: 'Margin',
              key: 'margin',
              type: 'CUSTOM',
              configuration: {
                as: 'BUTTONGROUP',
                dataType: 'string',
                allowedInput: [
                  { name: 'None', value: 'none' },
                  { name: 'Dense', value: 'dense' },
                  { name: 'Normal', value: 'normal' },
                ],
              },
            },
            {
              value: '',
              label: 'Helper text',
              key: 'helperText',
              type: 'TEXT',
            },
            {
              value: '',
              label: 'Input',
              key: 'actionInputId',
              type: 'ACTION_INPUT',
            },
          ],
          descendants: [],
        },
        {
          name: 'SubmitButton',
          options: [
            {
              value: 'Submit',
              label: 'Button text',
              key: 'submitButtonText',
              type: 'TEXT',
            },
            {
              value: 'Primary',
              label: 'Button Color',
              key: 'backgroundColor',
              type: 'COLOR',
            },
          ],
          descendants: [],
        },
      ],
    },
  ],
}))();
