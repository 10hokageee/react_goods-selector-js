import 'bulma/css/bulma.css';
import './App.scss';
import { useState } from 'react';
import cn from 'classnames';

export const goods = [
  'Dumplings',
  'Carrot',
  'Eggs',
  'Ice cream',
  'Apple',
  'Bread',
  'Fish',
  'Honey',
  'Jam',
  'Garlic',
];

export const App = () => {
  const [goodSelected, setGoodSelected] = useState('Jam');

  return (
    <main className="section container">
      {goodSelected === null ? (
        <h1 className="title is-flex is-align-items-center">
          No goods selected
        </h1>
      ) : (
        <h1 className="title is-flex is-align-items-center">
          {goodSelected} is selected
          <button
            data-cy="ClearButton"
            type="button"
            className="delete ml-3"
            onClick={() => setGoodSelected(null)}
          />
        </h1>
      )}
      <table className="table">
        <tbody>
          {goods.map((item, index) => {
            return (
              <tr
                data-cy="Good"
                // eslint-disable-next-line react/no-array-index-key
                key={index}
                className={cn('', {
                  'has-background-success-light': goodSelected === item,
                })}
              >
                <td>
                  <button
                    data-cy={
                      goodSelected === item ? 'RemoveButton' : 'AddButton'
                    }
                    type="button"
                    className={cn('button', {
                      'is-info': goodSelected === item,
                    })}
                    onClick={() =>
                      setGoodSelected(goodSelected === item ? null : item)
                    }
                  >
                    {goodSelected === item ? '-' : '+'}
                  </button>
                </td>

                <td data-cy="GoodTitle" className="is-vcentered">
                  {item}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </main>
  );
};
