import * as yup from 'yup';

export type LoginFormValues = yup.InferType<typeof loginSchema>;

export const loginSchema = yup.object({
  identifier: yup
    .string()
    .required('Required')
    .test(
      'is-email-or-empid',
      'Enter valid Email or Employee ID',
      (value) => {
        if (!value) return false;

        const isEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const isEmpId = /^EMP\d{3,}$/;

        return isEmail.test(value) || isEmpId.test(value);
      }
    ),

  password: yup
    .string()
    .required('Required')
    .matches(
      /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/,
      'Min 8 chars, upper, lower, number & special char'
    ),
});