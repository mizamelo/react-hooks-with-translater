import React, { useEffect, useMemo, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Spinner from 'react-spinner-material';

import MainAction from '~/store/ducks/main';
import Button from '~/styles/components/Button';
import translate from '~/configs/i18N';

export default function Main() {
  const dispatch = useDispatch();
  const { data, loading } = useSelector(state => state.main);

  useEffect(() => {
    async function fetchData() {
      await dispatch(MainAction.mainRequest());
    }
    fetchData();
  }, [dispatch]);

  const handleClick = useCallback(() => console.log('click'), []);

  const repoSize = useMemo(() => data.length, [data]);

  return (
    <div>
      <Spinner
        size={80}
        spinnerColor={'#FFF'}
        spinnerWidth={4}
        visible={loading}
      />
      <ul>
        {data.map(elemento => (
          <li key={elemento.id}>{elemento.archive_url}</li>
        ))}
      </ul>
      <strong>Quantidade total de repositório: {repoSize}</strong>
      <br />
      <Button size="small" onClick={handleClick}>
        {translate.BUTTON_SAVE}
      </Button>
    </div>
  );
}
