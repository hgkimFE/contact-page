<script setup lang="ts">
import ContactItem from './ContactItem.vue'
import DocumentationIcon from './icons/IconDocumentation.vue'
import ToolingIcon from './icons/IconTooling.vue'
import EcosystemIcon from './icons/IconEcosystem.vue'
</script>

<template>
  <ContactItem>
    <template #icon>
      <DocumentationIcon />
    </template>
    <template #heading>Phone</template>
    010-2737-6370 &#9;
    <a href="https://vitejs.dev/guide/features.html" target="_blank" rel="noopener">연락하기</a>
    <br />
  </ContactItem>

  <ContactItem class="mail-section">
    <template #icon>
      <ToolingIcon />
    </template>
    <template #heading>Mail</template>

    gmail : kimhg951117@gmail &#9;
    <a href="https://vitejs.dev/guide/features.html" target="_blank" rel="noopener">메일쓰기</a>
    <br />
    naver : kimhg951117@gmail &#9;
    <a href="https://vitejs.dev/guide/features.html" target="_blank" rel="noopener">메일쓰기</a>
    <br />
  </ContactItem>

  <ContactItem>
    <template #icon>
      <EcosystemIcon />
    </template>
    <template #heading>Jobkorea</template>
    잡코리아에서 이력서를 열람하실 수 있습니다.
    <br />
    <a href="https://pinia.vuejs.org/" target="_blank" rel="noopener">대충 잡코리아 링크</a>
  </ContactItem>
</template>
