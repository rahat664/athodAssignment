## Development

This project is built using Angular 15 for the form elements.

The main code for the dynamic form generation is in the `app/my-form` directory. The `my-form` component reads the `form.json` file and dynamically generates the form based on the JSON object.

The `form-field` component is used to generate individual form fields based on the field type and properties defined in the JSON object.

The `form-control.service` provides the validation and error messages for the form fields based on the field type and properties.

The `app.component` is the root component that renders the dynamic form.

There are provides a json for the form controls and that is stored in the `app/model/formscontrols` directory.

## Future Development
There are several potential improvements that can be made to this project, including:

-Adding more field types such as file upload and sliders.
-Adding support for nested forms and form arrays.
-Improving the validation and error handling for form fields.
-Adding form submission and data persistence capabilities.

## Conclusion
This project demonstrates how you can dynamically generate an Angular form based on a JSON object. With a little bit of configuration, you can easily generate complex forms with various input types and properties. If you have any questions or feedback, feel free to open an issue or pull request.

## Live link of the project
[This is an external link to athod assignment](https://athod-assignment-rahat664.vercel.app/)

