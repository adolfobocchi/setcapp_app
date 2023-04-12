import { Controller } from 'react-hook-form';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import 'react-datepicker/dist/react-datepicker.css';

const DataPicker = ({ name, control, defaultValue }) => {
    return (
      <Controller
            control={control}
            name={name}
            defaultValue={defaultValue || ""}
            render={({ field }) => (
              <DatePicker
                {...field}
                selected={field.value ? moment(field.value).toDate() : null}
                onChange={(value) => field.onChange(moment(value).format('YYYY-MM-DD HH:mm:ss'))}
                showTimeSelect
                timeFormat="HH:mm"
                timeIntervals={15}
                dateFormat="yyyy-MM-dd HH:mm"
              />
            )}
          />
    );
  };

  export default DataPicker;