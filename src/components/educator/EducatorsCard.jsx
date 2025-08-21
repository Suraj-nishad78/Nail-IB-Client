import "./educators.css";

const EducatorCard = ({educator}) => {
  return (
    <div className="educator-card">
      {/* Video Section */}
      <div className="educator-video">
        <iframe
          title="video-iframe"
          src={educator.link}
          frameBorder="0"
          allowFullScreen
          loading="lazy"
          allow="autoplay"
        ></iframe>
      </div>

      {/* Tutor Info */}
      <h3 className="educator-name">{educator.name}</h3>
      <p className="educator-details">{educator.info}</p>

      {/* Video Courses Section */}
      <h4 className="video-courses-title">Video Courses</h4>
      <div className="video-courses">
        {educator.course.map((course,index)=>(
        <span className="course-tag" key={index}>{course}</span>
        ))}
        {/* <span className="course-tag">Mathematics AA SL</span>
        <span className="course-tag">Mathematics AA HL</span>
        <span className="course-tag">Mathematics AI HL</span> */}
      </div>
    </div>
  );
};

export default EducatorCard;
