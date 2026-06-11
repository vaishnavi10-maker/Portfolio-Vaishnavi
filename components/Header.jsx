import React from 'react'
import '../src/index.css';
const Header = () => {
    return (

        <header className='fixed inset-x-0 top-0 z-50 bg-black shadow-md'>
                <nav aria-label='Global' className='flex items-center justify-between p-6 lg:px-8'>
                    <div className='flex lg:flex-1'>
                        <span className='text-sm/6 font-semibold text-white'>Vaishnavi</span>
                    </div>
                    <div className="flex lg:hidden">
                        <button type="button" command="show-modal" commandfor="mobile-menu" className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-200">
                            <span className="sr-only">Open main menu</span>
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" data-slot="icon" aria-hidden="true" className="size-6">
                                <path d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </button>
                    </div>
                    <div className='hidden lg:flex lg:gap-x-12 '>
                        <a href="#" className="text-sm/6 font-semibold text-white transition-transform duration-300 hover:scale-105">Home</a>
                        <a href="#about" className="text-sm/6 font-semibold text-white transition-transform duration-300 hover:scale-105">AboutMe</a>
                        <a href="#skills" className="text-sm/6 font-semibold text-white transition-transform duration-300 hover:scale-105">Skills</a>
                        <a href="#projects" className="text-sm/6 font-semibold text-white transition-transform duration-300 hover:scale-105">Projects</a>
                        <a href="#certificate" className="text-sm/6 font-semibold text-white transition-transform duration-300 hover:scale-105">Certifications</a>
                        <a href="#experience" className="text-sm/6 font-semibold text-white transition-transform duration-300 hover:scale-105">Experience</a>
                        <a href="#contact" className="text-sm/6 font-semibold text-white transition-transform duration-300 hover:scale-105">Contact</a>
                    </div>
                </nav>
                <el-dialog>
                    <dialog id="mobile-menu" className="backdrop:bg-transparent lg:hidden">
                        <div tabIndex="0" className="fixed inset-0 focus:outline-none">
                            <el-dialog-panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-gray-900 p-6 sm:max-w-sm sm:ring-1 sm:ring-gray-100/10">
                                <div className="flex items-center justify-between">
                                    <button type="button" command="close" commandfor="mobile-menu" className="-m-2.5 rounded-md p-2.5 text-gray-200">
                                        <span className="sr-only">Close menu</span>
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" data-slot="icon" aria-hidden="true" className="size-6">
                                            <path d="M6 18 18 6M6 6l12 12" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </button>
                                </div>
                                <div className="mt-6 flow-root">
                                    <div className="-my-6 divide-y divide-white/10">
                                        <div className="space-y-2 py-6">
                                            <a href="#" className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-white hover:bg-white/5">Home</a>
                                            <a href="#about" className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-white hover:bg-white/5">AboutMe</a>
                                            <a href="#skills" className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-white hover:bg-white/5">Skills</a>
                                            <a href="#projects" className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-white hover:bg-white/5">Projects</a>
                                            <a href="#certifications" className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-white hover:bg-white/5">Certifications</a>
                                            <a href="#experience" className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-white hover:bg-white/5">Experience</a>
                                            <a href="#contact" className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-white hover:bg-white/5">Contact</a>

                                        </div>
                                         
                                    </div>
                                </div>
                            </el-dialog-panel>
                        </div>
                    </dialog>
                </el-dialog>
            </header>

    )
}

export default Header