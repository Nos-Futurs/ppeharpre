import { Component, createSignal } from 'solid-js';
import { createStore } from 'solid-js/store';
import Input from '../../Input/Input';
import SubmitButton from '../../buttons/SubmitButton';
import './contactForm.scss';
import { checkEmailValidity } from './methods/checkEmailValidity';
import { sendEmail } from './methods/sendEmail';

const ContactForm: Component = () => {
  const [form, setForm] = createStore({
    name: '',
    email: '',
    message: '',
  });
  const [validForm, setValidForm] = createSignal({ valid: true, field: [''] });
  const [messageSent, setMessageSent] = createSignal(false);

  const checkFormValidity = (): boolean => {
    const fieldArray: string[] = [];
    let valid = true;
    if (form.name == '') {
      valid = false;
      fieldArray.push('Le champ Nom ne doit pas être vide.');
    }
    if (form.email == '') {
      valid = false;
      fieldArray.push('Le champ Email ne doit pas être vide.');
    } else if (!checkEmailValidity(form.email)) {
      valid = false;
      fieldArray.push("Le format de l'Email n'est pas valide.");
    }
    if (form.email == '') {
      valid = false;
      fieldArray.push('Le champ Message ne doit pas être vide.');
    }
    if (!valid) {
      setValidForm({ valid: false, field: fieldArray });
    }
    return valid;
  };

  const handleSubmit = (): void => {
    if (checkFormValidity()) {
      setValidForm({ valid: true, field: [] });
      sendEmail(form)
        .then(() => {
          setMessageSent(true);
        })
        .catch((err) => {
          console.log('FAILED...', err);
          setValidForm({
            valid: false,
            field: ["Une erreur est apparue lors de l'envoie du mail."],
          });
        });
    }
  };

  return (
    <div class="form">
      <div class="form__title">Envoyer un message </div>
      <div class="form__input">
        <Input
          type="text"
          name="name"
          displayName="Nom"
          onInput={(value: string): void => {
            setForm('name', value);
          }}
        />
      </div>
      <div class="form__input">
        <Input
          type="email"
          name="email"
          displayName="E-Mail"
          onInput={(value: string): void => {
            setForm('email', value);
          }}
        />
      </div>
      <div class="form__container-textarea">
        <div class="form__message">Message</div>
        <textarea
          class="form__textarea"
          onInput={(
            event: InputEvent & {
              currentTarget: HTMLTextAreaElement;
              target: HTMLTextAreaElement;
            },
          ): void => {
            setForm('message', event.currentTarget.value);
          }}
          name="message"
        />
      </div>
      <SubmitButton
        onClick={(): void => {
          handleSubmit();
        }}
        name="ENVOYER"
      />
      <div class="form__error">
        {!validForm().valid &&
          validForm().field.map((field) => {
            return <div class="form__error__message">{field}</div>;
          })}
      </div>
      <div class="form__validation">
        {messageSent() && <>Votre message a bien été envoyé.</>}
      </div>
    </div>
  );
};

export default ContactForm;
