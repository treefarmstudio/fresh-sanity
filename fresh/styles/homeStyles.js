import { css } from "../lib/cssHelper.ts"

export const homeStyles = css`
  .home-hero__container {
    margin: 0 auto;
    padding: 0 1rem 10vh 1rem;
    max-width: 1300px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 80vh;
  }
  .home-hero__text {
    margin: 2rem 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    text-align: center;
  }
  .home-hero__text a {
    text-decoration: underline;
  }
  .home-hero__container ul {
    width: 100%;
    list-style: none;
    padding: 0;
    margin: 0;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));
    gap: 1rem;
  }
  .home-template__item {
    display: flex;
  }
  .home-template__item a {
    padding: 1rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    border: 2px solid var(--theme-on-background);
    border-radius: 0.5rem;
    color: inherit;
    font-size: 1.5rem;
    text-decoration: none;
    text-align: left
  }
  .home-template__item a:hover h2 {
    text-decoration: underline;
  }
  .home-template__item a img {
    width: 100%;
    height: auto;
    object-fit: cover;
  }
  .home-template__item a h2 {
    margin: 0;
  }
`