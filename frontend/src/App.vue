<script setup>
import { onMounted, ref } from 'vue'

const apiStatus = ref('Checking backend...')
const sections = [
  { icon: '📘', title: '12 English Tenses', description: 'Learn forms, formulas, examples and Khmer translations.' },
  { icon: '🎧', title: 'Listening', description: 'Listen to example sentences and practise comprehension.' },
  { icon: '🎙️', title: 'Speaking', description: 'Practise pronunciation when your browser supports speech recognition.' },
  { icon: '🎮', title: 'Grammar Games', description: 'Learn with quizzes, fill-in-the-blanks and sentence games.' },
  { icon: '✍️', title: 'Practice', description: 'Answer questions and review your learning progress.' }
]

onMounted(async () => {
  try {
    const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:5000'
    const response = await fetch(`${apiUrl}/api/health`)
    const data = await response.json()
    apiStatus.value = data.message || 'Backend connected'
  } catch {
    apiStatus.value = 'Backend not connected yet'
  }
})
</script>

<template>
  <main class="page">
    <header class="topbar">
      <a class="brand" href="#"><span class="brand-icon">📚</span> English Grammar Hub</a>
      <span class="status">{{ apiStatus }}</span>
    </header>

    <section class="hero">
      <p class="eyebrow">LEARN • PRACTISE • IMPROVE</p>
      <h1>Make English Grammar <span>Easy</span></h1>
      <p class="intro">A friendly place to learn English grammar step by step, with Khmer explanations and interactive practice.</p>
      <a class="primary-button" href="#learning">Start learning <span>→</span></a>
    </section>

    <section id="learning" class="learning">
      <div class="section-heading">
        <p class="eyebrow">YOUR LEARNING SPACE</p>
        <h2>Explore the Hub</h2>
        <p>Choose a section to begin. We will build each activity in the next steps.</p>
      </div>
      <div class="cards">
        <article v-for="item in sections" :key="item.title" class="card">
          <div class="card-icon">{{ item.icon }}</div>
          <h3>{{ item.title }}</h3>
          <p>{{ item.description }}</p>
          <span class="coming">Learning section</span>
        </article>
      </div>
    </section>

    <footer>English Grammar Hub · Vue 3 + Node.js + MongoDB</footer>
  </main>
</template>
