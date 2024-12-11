<template>
  <div class="col-12 col-lg-6">
    <h4 class="contact-title">Зв'яжіться з нами</h4>
    <h5 class="contact-subtitle">Ми з нетерпінням чекаємо від вас!</h5>

    <form class="contact-form" @submit.prevent="submit">
      <div class="contact-form__row">
        <label for="name" class="form-field col-12">
          Ім'я*
          <input
            class="form-field__input"
            type="text"
            id="name"
            required
            v-model="formData.name"
          />
        </label>
        <label for="email" class="form-field col-12">
          Email*
          <input
            class="form-field__input"
            type="email"
            id="email"
            required
            v-model="formData.email"
          />
        </label>
      </div>

      <label for="message" class="form-field">
        Ваше повідомлення
        <textarea
          id="message"
          v-model="formData.message"
          class="form-field__textarea"
        />
      </label>
      <label for="file" class="form-field col-12">
        Резюме
        <input
          class="form-field__upload"
          type="file"
          accept="image/*, .pdf, .doc, .docx"
          id="file"
          @change="onFileChange"
        />
      </label>
      <div class="contact-form__actions">
        <AppButton variant="black">Відправити повідомлення</AppButton>
      </div>
    </form>
  </div>
</template>

<script setup>
import Micromodal from "micromodal";

const formData = ref({
  name: "",
  email: "",
  file: null,
});

const onFileChange = (e) => {
  console.log("e", e);
  formData.value.file = e.target.files[0];
};

const fileToBase64 = (file) =>
  new Promise((resolve, reject) => {
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        const base64 = reader.result.split(",")[1];
        resolve(base64);
      };
      reader.readAsDataURL(file);
    }
  });

const submit = async () => {
  const fileContent = await fileToBase64(formData.value.file);
  console.log(fileContent);
  try {
    await useFetch("/api/mail", {
      method: "POST",
      body: {
        subject: "Indel. Карьера",
        html: `
            <h1>${formData.value.name} надіслав запит із сайту Indel. Зв'яжіться з ним</h1>
            <p><b>Тема</b>: "Indel. Карьера"</p>
            <p><b>Email</b>: ${formData.value.email}</p>
            <p><b>Повідомлення</b>: ${formData.value.message}</p>
          `,
        attachments: [
          {
            content: fileContent,
            filename: formData.value.file.name,
            type: formData.value.file.type,
            disposition: "attachment",
          },
        ],
      },
    });

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

<style lang="scss" scoped></style>
