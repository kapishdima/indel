<template>
  <AppModal id="submit-modal" :title="$t('Замовити взірець')">
    <form class="submit-modal__form" @submit.prevent="submit">
      <label class="form-field">
        {{ $t("Ім'я") }}
        <input
          type="text"
          class="form-field__input"
          required
          v-model="formData.name"
        />
      </label>
      <label class="form-field">
        {{ $t("Email") }}
        <input
          type="email"
          class="form-field__input"
          required
          v-model="formData.email"
        />
      </label>
      <label class="form-field">
        {{ $t("Тема") }}
        <input
          type="text"
          class="form-field__input"
          v-model="formData.subject"
        />
      </label>
      <label class="form-field">
        {{ $t("Повідомлення") }}
        <textarea
          class="form-field__textarea"
          required
          v-model="formData.message"
        />
      </label>
      <div class="submit-modal__actions">
        <AppButton variant="black" appearence="filled"
          >{{ $t("Замовити взірець") }}</AppButton
        >
      </div>
    </form>
  </AppModal>
</template>

<script setup>
import Micromodal from "micromodal";

const props = defineProps(["title"]);

const formData = reactive({
  name: "",
  email: "",
  message: "",
});

const submit = async () => {
  try {
    const config = useRuntimeConfig();

    await useFetch("/api/mail", {
      method: "POST",
      body: {
        to: config.public.mailTo,
        subject: "Заявка с сайта",
        html: `
            <h1>${formData.name} надіслав запит із сайту Indel на товар ${props.title}</h1>
            <p><b>Тема</b>: "Заявка на товар"</p>
            <p><b>Email</b>: ${formData.email}</p>
            <p><b>Повідомлення</b>: ${formData.message}</p>
          `,
      },
    });

    Micromodal.close("submit-modal");
    Micromodal.show("success-modal");
    setTimeout(() => {
      Micromodal.close("success-modal");
    }, 5000);
  } catch (error) {
    Micromodal.show("error-modal");
    setTimeout(() => {
      Micromodal.close("error-modal");
    }, 5000);
  }
};
</script>
