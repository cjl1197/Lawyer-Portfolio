import './index.scss';
import resume from '../../assets/files/Resume.pdf';


const About = () => {

    const handleDownloadClick = () => {
    const link = document.createElement('a');
    link.href = resume;
    link.download = 'resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

    return (
        <div className='container about-page'>
            <div className='text-zone'>
                <h1>About Me</h1>
                    <p>As a retired Army veteran over 20 years of service and a former law enforcement special agent, 
                    I have extensive experience investigating felony crimes and managing complex systems. Throughout my career, 
                    I developed a sharp attention to detail and the ability to think creatively to solve complex problems. 
                    My experience investigating crimes and managing complex systems has taught me the value of persistence, 
                    determination, and the importance of staying up-to-date with new technologies. <br /> <br /> 

                    I am eager to bring my unique skillset to a career in programming and am excited about the opportunity to  
                    learn and grow in this dynamic field. I am confident that my experience in law enforcement and the military 
                    has prepared me well for this transition and I am committed to achieving success in my new role.</p>
            <div className="content">
            <button className="btn" onClick={handleDownloadClick}>Download Resume</button>
            </div>
            </div>
        </div>
    )
}

export default About;