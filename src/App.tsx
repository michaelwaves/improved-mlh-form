import logo from '/logo.png'
import './App.css'

function App() {

  return (
    <>
      <div className='w-[clamp(500px,70vw,850px)] flex flex-col items-center justify-center'>
        <div className='w-full h-[90px] bg-[#1d539f] flex items-center px-2' >
          <img src={logo} alt="" className='object-fit h-20' />
        </div>
        <div className='w-[clamp(600px,60vw,750px)] justify-start flex px-4 mt-6 mb-8'>
          <h1 className='font-bold text-3xl'>Code Sample</h1>
        </div>
        <div className=" relative text-xl text-left space-y-4 w-[clamp(600px,60vw,750px)] border-gray-400 rounded-sm border-[1px] p-4">
          <h2 className='font-bold text-3xl bg-white p-2 absolute left-2 -top-[28px]'>Overview</h2>

          <p>At Major League Hacking we don’t believe in whiteboarding interviews. Instead, we prefer to talk about the code you’ve written. As part of your application you should submit a code sample that you feel demonstrates your abilities. Please ensure this code is highly organized and production ready. We’ll review this sample ourselves while looking over your application. If you’re invited to a tech interview, you’ll talk about this specific code with your interviewer.</p>

          <p className='font-bold'><u>Code Sample Requirements:</u></p>
          <ul className='space-y-4 list-disc ml-8' >
            <li><b>Representative: </b>
              The sample should be representative of your abilities. If you’re submitting a group project, make sure you contributed a substantial amount of code. Projects that are based mostly on a tutorial aren’t representative of your own abilities.</li>
            <li><b>Existing sample: </b>
              This is code that you wrote for a purpose other than this application.</li>
            <li><b>Public on GitHub: </b>
              Your sample should be viewable on GitHub publicly. If you can’t make the repository public, convert your code to a secret GitHub Gist instead</li>
            <li><b>Substantial Commit History: </b>
              We need to see your ability to use source control tools like Git.</li>
            <li><b>Full project: </b>
              Please include the entire app or website, not just a few files. </li>
            <li><b>Not too large: </b>
              It’s difficult to have a conversation about a mono-repo with dozens of microservices. It should be immediately clear what you contributed to the sample. Dense frameworks with lots of boilerplate such as Django or Laravel don’t usually make for good code samples. Lightweight frameworks such as Flask and Express are good examples.</li>
            <li><b>Real problem: </b>
              Your sample should solve a real problem or accomplish a real goal. While some class projects will meet this criteria, most won’t. There’s nothing wrong with the binary search tree you wrote, but it’ll be hard for your interviewers to get to know you through that kind of sample.
            </li>
            <li><b>No Jupyter notebooks: </b>
              We need to see your ability to write a project that an end user can use. It should be deployable. We don’t accept Jupyter notebooks or other exploratory code samples because it’s difficult to have a conversation about your coding skills with these.</li>
            <li><b>Polished: </b>
              Edited to remove large commented out sections of code, forgetten debugging print statements, and extra test files that shouldn't have been committed. Code is highly organized.</li>
          </ul>
          <p className='font-bold'><u>Examples of good code samples</u></p>
          <ul className='list-disc ml-8'>
            <li>A web app with JavaScript</li>
            <li>A web server &#40;backend only&#41;</li>
            <li>A mobile app</li>
            <li>A desktop app</li>
            <li>A command line app</li>
          </ul>
          <p className='font-bold'><u>Examples of poor code samples</u></p>
          <ul className='list-disc ml-8'>
            <li>Jupyter notebooks</li>
            <li>Tutorials</li>
            <li>Simple static sites with no logic<i> &#40;i.e. without JavaScript / similar&#41;</i></li>
            <li>Algorithm implementations / competitive coding solutions</li>
            <li>University or bootcamp coursework <i>&#40;as these often contain too much boilerplate and aren’t representative of your own abilities&#41;</i></li>
          </ul>
          <div>
            <p className='font-bold'><u>What to do if you don’t have an appropriate code sample:</u></p>
            <p>If you don’t have a relevant code sample, our best advice is to attend one of the <u>upcoming MLH hackathons</u> and submit whatever you build there. We recommend polishing and editing this code first. MLH has hackathons taking place every weekend of the year and they are open to both students and professionals.</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
