import { useContext, useEffect } from 'react';
import GlobalContext from '../../../context/GlobalContext';

export function PacientesAdminPage() {
  const { setPageTitle } = useContext(GlobalContext);

  useEffect(() => {
    document.title = 'NutriDiet - Pacientes';

    setPageTitle('Pacientes');
  }, []);

  return (
    <div>
      <h1>Users admin page</h1>

      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam
        doloremque doloribus voluptatem quia similique eveniet! Sequi sint
        facilis optio eaque? Dolores, delectus cum! Voluptatibus incidunt nisi,
        quas nobis eveniet dicta.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam
        doloremque doloribus voluptatem quia similique eveniet! Sequi sint
        facilis optio eaque? Dolores, delectus cum! Voluptatibus incidunt nisi,
        quas nobis eveniet dicta.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam
        doloremque doloribus voluptatem quia similique eveniet! Sequi sint
        facilis optio eaque? Dolores, delectus cum! Voluptatibus incidunt nisi,
        quas nobis eveniet dicta.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam
        doloremque doloribus voluptatem quia similique eveniet! Sequi sint
        facilis optio eaque? Dolores, delectus cum! Voluptatibus incidunt nisi,
        quas nobis eveniet dicta.
      </p>
    </div>
  );
}
