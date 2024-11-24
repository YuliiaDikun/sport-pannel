function groupedAndSortedTeams(array) {
  return array.reduce((acc, team) => {
    const { group } = team;

    if (!acc[group]) {
      acc[group] = [];
    }

    // Додати копію об'єкта до групи
    acc[group] = [...acc[group], { ...team }];

    // Сортувати масив у групі за points (новий масив, не мутуючи існуючий)
    acc[group] = acc[group].sort((a, b) => a.points - b.points);

    return acc;
  }, {});
}

export default groupedAndSortedTeams;
