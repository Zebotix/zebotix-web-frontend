const CompanyLocation = () => {
  return (
    <div className=''>
      <iframe
        className='company-location-iframe'
        title='Company Location Map'
        src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d716.1428875052917!2d66.96335599536737!3d24.918229595401005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb315003b6ec927%3A0xd72699e3856e59d7!2sLEADERS%20Coaching%20Centre!5e1!3m2!1sen!2s!4v1751445729243!5m2!1sen!2s'
        width='400'
        height='300'
        allowFullScreen
        loading='lazy'
        referrerPolicy='no-referrer-when-downgrade'
      ></iframe>
    </div>
  );
};

export default CompanyLocation;
