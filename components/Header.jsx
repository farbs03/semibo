import Link from 'next/link'
import { Bars3Icon } from "@heroicons/react/24/outline"

/*semibo   Home business about faq reviews news contact, etc    facebook, IN, twitter, pinterest, blog
Terms and conditions, privacy policy, semibo 2022
*/

const links = [
    {
        title: "Home",
        href: "/"
    },
    {
        title: "Business",
        href: "/"
    },
    {
        title: "About",
        href: "/"
    },
    {
        title: "FAQ",
        href: "/"
    },
]

const Header = () => {
    return (
        <div>
            <div className='flex justify-between p-4 items-center mx-auto'>
                <div>
                    <p className="font-semibold font-pacifico tracking-wider text-3xl text-cyan-500">
                        Semibo
                    </p>
                </div>
                <div className='hidden md:block'>
                    <div className="flex items-center gap-4 font-semibold text-white">
                        {links.map((link) => (
                            <Link key={link.title} href={link.href}>
                                <p className='cursor-pointer hover:text-cyan-500 transition duration-200 ease-in'>
                                    {link.title}
                                </p>
                            </Link>
                        ))}
                        <div className='flex items-center gap-4 ml-4'>
                            <button className='px-4 py-2 rounded-full font-semibold text-white border-2 border-cyan-500  hover:bg-cyan-500/30 transition duration-200 ease-in'>
                                Login
                            </button>
                            <button className='px-4 py-2 rounded-full font-semibold text-white border-2 border-cyan-500 bg-cyan-500 hover:bg-cyan-600 hover:border-cyan-600 transition duration-200 ease-in'>
                                Register
                            </button>
                        </div>
                    </div>
                </div>
                <div className='block md:hidden'>
                    <button className='p-2 rounded-full'>
                        <Bars3Icon className='w-6 h-6 text-white' />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Header