import { Button } from './Button/Button';
import { Description } from './Description/Description';
import classes from './ProjectsContainer.module.css';
import { Title } from './Title/Title';
export const ProjectsContainer = () => {
  return (
    <div className={classes.contentContainer}>
      <Title />
      <Description />
      <Button />
    </div>
  );
};
