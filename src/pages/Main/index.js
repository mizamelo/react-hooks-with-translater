import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import MainAction from "~/store/ducks/main";
import Button from "~/styles/components/Button";
import translate from "~/configs/i18N";

export default function Main() {
  const dispatch = useDispatch();
  const { data } = useSelector(state => state.main);

  useEffect(() => {
    async function fetchData() {
      await dispatch(MainAction.mainRequest());
    }
    fetchData();
  }, [dispatch]);

  return (
    <div>
      <ul>
        {data.map(elemento => (
          <li key={elemento.id}>{elemento.archive_url}</li>
        ))}
      </ul>
      <Button size="small">{translate.BUTTON_SAVE}</Button>
    </div>
  );
}
