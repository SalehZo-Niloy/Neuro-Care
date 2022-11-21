import { DayPicker } from 'react-day-picker';
import { format } from 'date-fns';
import 'react-day-picker/dist/style.css';
import style from './AppointmentBanner.module.css'


const AppointmentBanner = ({ selectedDate, setSelectedDate }) => {
    // console.log(selectedDate);

    return (
        <div className="hero p-0 lg:p-8 bgi w-11/12 mx-auto my-4 md:my-12">
            <div className="hero-content flex-col lg:flex-row-reverse justify-evenly">
                <img src="https://i.ibb.co/3swXwjx/high-angle-ct-scan-machine-room-23-2149341486.webp" className="w-full md:w-1/2 lg:w-1/2 rounded-lg shadow-2xl" alt='' />
                <div>
                    <DayPicker
                        className={style.rdp}
                        mode='single'
                        selected={selectedDate}
                        onSelect={(selectedDate) => {
                            if (selectedDate) {
                                setSelectedDate(selectedDate);
                            }
                        }}
                    />
                    <p>You have selected the date {format(selectedDate, 'PP')}</p>
                </div>
            </div>
        </div>
    );
};

export default AppointmentBanner;