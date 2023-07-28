function Experience({
  job: { jobPost, companyName, period, description, website },
}) {
  return (
    <div className='mb-4'>
      <h3 className='text-2xl font-bold text-purple-600 mb-1'>
        {jobPost}
      </h3>
      <div>
        <img src='' alt='' />
        <a href={website} target='_blank'>
          <span className='text-xl underline hover:text-purple-600 duration-300 hover:no-underline'>
            {companyName}
          </span>
        </a>
      </div>
      <i>{period}</i>
      <p className='lg'>{description}</p>
    </div>
  );
}

export default Experience;
