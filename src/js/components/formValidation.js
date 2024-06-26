// Functions
import { validateForms } from "../functions/validate-forms";

export const formValidation = () => {
  validateForms(
    ".contact__info",
    [
      {
        ruleSelector: ".contact__name",
        rules: [
          {
            rule: "required",
            errorMessage: "Name is required",
          },
        ],
      },
      {
        ruleSelector: ".contact__mail",
        rules: [
          {
            rule: "email",
            errorMessage: "Email is not valid",
          },
          {
            rule: "required",
            errorMessage: "Email is required",
          },
        ],
      },
      {
        ruleSelector: ".contact__textarea",
        rules: [
          {
            rule: "required",
            errorMessage: "Message is required",
          },
        ],
      },
    ],
    null,
    null,
    null,
    [
      {
        key: "Name is required",
        dict: {
          ru: "Введите имя",
        },
      },
      {
        key: "Email is not valid",
        dict: {
          ru: "Почта некорректна",
        },
      },
      {
        key: "Email is required",
        dict: {
          ru: "Введите почту",
        },
      },
    ],
    "ru"
  );
};
