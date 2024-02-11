

type StudentProps = {
  firstName: string;
  lastName: string;
  grades: number[];
};

function Student({ firstName, lastName, grades }: StudentProps) {
  const calculateAverageGrade = () => {

    const sum = grades.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    return sum / grades.length;
  };

  const averageGrade = grades ? calculateAverageGrade() : 0;

  return (
    <div>
      <p>{firstName}</p>
      <p>Фамилия: {lastName}</p>
      <p>Средняя оценка: {averageGrade}</p>
    </div>
  );
}

export default Student;
 
