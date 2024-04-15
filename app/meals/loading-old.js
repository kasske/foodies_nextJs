import classes from './loading.module.css';

/* this is not used since we used suspense, but its here just in case */

export default function MealsLoadingPage() {
  return (
    <p className={classes.loading}>Fetching meals...</p>
  )
}
