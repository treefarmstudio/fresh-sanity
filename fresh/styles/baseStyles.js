import { css } from "https://deno.land/x/treesap@0.0.2/src/css/mod.ts";
import { resetStyles } from "./resetStyles.js"

const globalStyles = css`
  :root {
    --theme-primary: #000;
    --theme-background: #fff;
    --theme-on-background: #000;

    --step--3: clamp(0.64rem, calc(0.66rem + -0.02vw), 0.65rem);
    --step--2: clamp(0.78rem, calc(0.77rem + 0.03vw), 0.80rem);
    --step--1: clamp(0.94rem, calc(0.92rem + 0.11vw), 1.00rem);
    --step-0: clamp(1.13rem, calc(1.08rem + 0.22vw), 1.25rem);
    --step-1: clamp(1.35rem, calc(1.28rem + 0.37vw), 1.56rem);
    --step-2: clamp(1.62rem, calc(1.50rem + 0.58vw), 1.95rem);
    --step-3: clamp(1.94rem, calc(1.77rem + 0.87vw), 2.44rem);
    --step-4: clamp(2.33rem, calc(2.08rem + 1.25vw), 3.05rem);
    --step-5: clamp(2.80rem, calc(2.45rem + 1.77vw), 3.82rem);
  }
  body {
    font-size: var(--step-0);
    line-height: 1.5;
    font-family: 'Inter', sans-serif;
    background-color: var(--theme-background);
    color: var(--theme-on-background);
  }
  a {
    color: var(--theme-on-background);
  }
  a.btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 0.5rem 1rem;
    border: 2px solid var(--theme-on-background);
    border-radius: 2rem;
    text-decoration: none !important;
  }
  a.btn:hover {
    background-color: var(--theme-on-background);
    color: var(--theme-background);
  }
  .btn__icon {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    margin-left: 0.5rem;
  }
  /* Typography */
  h1 {
    font-size: var(--step-3);
    font-weight: 700;
  }
  h2 {
    font-size: var(--step-2);
    font-weight: 700;
  }
  h3 {
    font-size: var(--step-1);
    font-weight: 700;
  }
  h4, h5, h6 {
    font-size: var(--step-0);
    font-weight: 700;
  }
  p {
    font-size: var(--step-0);
    font-weight: 400;
    max-width: 50ch;
  }
  @media (prefers-color-scheme: dark) {
    :root {
      --theme-primary: #fff;
      --theme-background: hsl(0, 0%, 6%);
      --theme-on-background: #fff;
    }
  }
`
export const baseStyles = [resetStyles, globalStyles]