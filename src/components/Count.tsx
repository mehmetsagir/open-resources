import NumberFormat from 'react-number-format';

type Props = {
  value: number;
  page: number;
};

const Count: React.FC<Props> = ({ value, page }) => {
  return (
    <p>
      {value > 0 ? (
        <>
          Found&nbsp;
          <b>
            <NumberFormat
              value={page * 30}
              displayType="text"
              thousandSeparator
            />
            &nbsp;/&nbsp;
            <NumberFormat value={value} displayType="text" thousandSeparator />
          </b>
          &nbsp;results
        </>
      ) : (
        'No results'
      )}
    </p>
  );
};

export default Count;
