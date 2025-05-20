import "./bootstrap"

import { createInertiaApp } from '@inertiajs/react'
import { createRoot } from 'react-dom/client'
import "../css/app.css"
import Layout from "./Layout/Layout"

import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'

const queryClient = new QueryClient();

createInertiaApp({
  resolve: name => {
    const pages = import.meta.glob('./Pages/**/*.jsx', { eager: true })
    let page = pages[`./Pages/${name}.jsx`]
    page.default.layout = page.default.layout || ((page) => <Layout>{page}</Layout>)
    return page;
  },
  setup({ el, App, props }) {
    createRoot(el).render(
    <QueryClientProvider client={queryClient}>
      <App {...props} />
    </QueryClientProvider>
    )
  },
  progress: false,
})