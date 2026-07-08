import python from '../src/assets/python.svg'
import java from '../src/assets/java.svg'
import html from '../src/assets/html.svg'
import css from '../src/assets/css.svg'
import javascript from '../src/assets/javascript.svg'
import nodejs from '../src/assets/nodejs.svg'
import vite from '../src/assets/vite.svg'
import react from '../src/assets/react.svg'
import csharp from '../src/assets/csharp.svg'
import php from '../src/assets/php.svg'
import dotnet from '../src/assets/dotnet.svg'
import kotlin from '../src/assets/kotlin.svg'
import django from '../src/assets/django.svg'
import mongodb from '../src/assets/mongodb.svg'
import windows from '../src/assets/windows.svg'
import linux from '../src/assets/linux.svg'

const skillIcons = { python, java, html, css, javascript, nodejs, vite, react, csharp, php, dotnet, kotlin, django }

function Skills() {
  return (
    <section className="text-#fff mx-auto px-4 py-20 max-w-7xl"  id="skills">
      <h2 className="text-4xl text-[#480ebc]  mb-5">My Skills</h2>
      <p className="text-xl max-w-3xl mb-12 text-amber-50">
        A collection of tools and technologies I use to design, develop, and deploy web applications.
      </p>

      <div className="pb-10">
        <h4 className="text-base font-semibold tracking-[1px] text-[#ccc] mb-3.75">Languages and Tools</h4>
        <div className="flex flex-wrap gap-10 items-center">
          {Object.entries(skillIcons).map(([name, src]) => (
            <img key={name} src={src} alt={name} className="w-50px h-50px size-14 object-contain transition-transform duration-300 ease-in-out hover:scale-125" />
          ))}
        </div>
      </div>

      <div className="pb-10">
        <h4 className="text-base font-semibold tracking-[1px] text-[#ccc] mb-3.75">Database</h4>
        <div className="flex flex-wrap gap-10 items-center">
          <img src={mongodb} alt="mongodb" className="w-50px h-50px size-14 object-contain transition-transform duration-300 ease-in-out hover:scale-125" />
        </div>
      </div>

      <div className="pb-10">
        <h4 className="text-base font-semibold tracking-[1px] text-[#ccc] mb-3.75">Operating Systems</h4>
        <div className="flex flex-wrap gap-10 items-center">
          <img src={windows} alt="windows" className="w-50px h-50px size-14 object-contain transition-transform duration-300 ease-in-out hover:scale-125" />
          <img src={linux} alt="linux" className="w-50px h-50px size-14 object-contain transition-transform duration-300 ease-in-out hover:scale-125" />
        </div>
      </div>
    </section>
  );
}

export default Skills;
