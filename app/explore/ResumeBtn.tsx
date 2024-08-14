const ResumeBtn = () => {
    return (
        <div>
            <button className="resumeBtn text-white py-2 px-4 rounded inline-flex items-center">
              <a
                href="https://drive.google.com/file/d/1c6FX13IKiF6xaQidbB5ZGuGzIbrNVETB/view?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  className="fill-current w-4 h-4 mr-2"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" />
                </svg>
                <span>Resume</span>
              </a>
            </button>
        </div>
    );
};
export default ResumeBtn;