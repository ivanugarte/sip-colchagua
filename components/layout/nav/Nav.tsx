import React, { Fragment } from 'react'
import { useRouter } from 'next/router' 
import Link from 'next/link'
import Image from 'next/image'

import navigations from './menusip.json'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/solid'

export default function Nav() {
  const router = useRouter()

  return (
    <>
      <Disclosure as="nav" className="bg-red-100 z-[1010] shadow fixed w-full ">
        {({ open }) => (
          <>
            <div className="mx-auto px-4 sm:px-6 lg:max-w-screen-xl md:max-w-7xl lg:px-8">
              <div className="flex h-28 justify-between">
                <div className="flex">
                  <div className="flex flex-shrink-0 items-center my-auto">
                    {/* <div className="relative block h-16 w-16 md:hidden"> */}
                    <div className="relative block h-28 w-28">
                      <Image
                        src="/img/logo.jpeg"
                        alt="Workflow"
                        layout="fill"
                        objectFit="contain"
                        priority
                      />
                    </div>
                    {/* <div className="relative hidden md:block md:h-28 md:w-72 lg:h-24 lg:w-64">
                      <Image
                        src="/img/bluechipsnews_light.svg"
                        alt="Workflow"
                        layout="fill"
                        objectFit="contain"
                        priority
                      />
                    </div> */}
                  </div>
                  <div className="navDesktopItems hidden pl-4 sm:ml-6 sm:flex md:space-x-4 md:pl-4 lg:space-x-12 lg:pl-20 xl:pl-32">
                    {navigations &&
                      navigations.length > 0 &&
                      navigations.map((menu) => {
                        if (menu.activeNavbar)
                          return (
                            <React.Fragment key={menu.id}>
                              {!menu.children || menu.children.length < 1 ? (
                                <>

                                  <Disclosure.Button as={Fragment}>
                                    <Link href={menu.href}>
                                      <a
                                        className={`navMenuItem inline-flex items-center border-b-2 px-1 pt-1 text-xs font-medium md:text-sm ${router.pathname === menu.href
                                          ? 'border-indigo-500 text-gray-900'
                                          : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'
                                          }`}
                                      >
                                        {(menu.name)}
                                      </a>
                                    </Link>
                                  </Disclosure.Button>

                                </>
                              ) : (
                                <>
                                  <Menu
                                    as="div"
                                    className="navMenuItem relative z-40 inline-flex items-center border-b-2 border-transparent px-1 pt-1 hover:border-gray-300 hover:text-gray-700"
                                  >
                                    {({ open }) => (
                                      <>
                                        <Menu.Button className="text-xs font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700 md:text-sm">
                                          {(menu.name)}
                                          {open ? (
                                            <ChevronUpIcon
                                              className="inline-flex h-5 w-5"
                                              aria-hidden="true"
                                            />
                                          ) : (
                                            <ChevronDownIcon
                                              className="inline-flex h-5 w-5"
                                              aria-hidden="true"
                                            />
                                          )}
                                        </Menu.Button>
                                        <Transition
                                          as={Fragment}
                                          enter="transition ease-out duration-200"
                                          enterFrom="transform opacity-0 scale-95"
                                          enterTo="transform opacity-100 scale-100"
                                          leave="transition ease-in duration-75"
                                          leaveFrom="transform opacity-100 scale-100"
                                          leaveTo="transform opacity-0 scale-95"
                                        >
                                          <Menu.Items className="absolute left-0 top-16 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                            {menu.children &&
                                              menu.children.length > 0 &&
                                              menu.children.map(
                                                (subMenu: any) => {
                                                  if (subMenu.activeNavbar)
                                                    return (
                                                      <React.Fragment
                                                        key={subMenu.slug}
                                                      >
                                                        <Menu.Item>
                                                          <Link
                                                            href={subMenu.href}
                                                          >
                                                            <a
                                                              className={`block border-l-8 py-2 pl-3 pr-4 text-base font-medium ${router.pathname ===
                                                                subMenu.href
                                                                ? 'border-indigo-500 bg-indigo-50 text-indigo-700'
                                                                : 'border-transparent text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700'
                                                                }`}
                                                            >
                                                              {(subMenu.name)}
                                                            </a>
                                                          </Link>
                                                        </Menu.Item>
                                                      </React.Fragment>
                                                    )
                                                  else return null
                                                }
                                              )}
                                          </Menu.Items>
                                        </Transition>
                                      </>
                                    )}
                                  </Menu>
                                </>
                              )}
                            </React.Fragment>
                          )
                        else return null
                      })}
                    {/* <div className="relative z-40 inline-flex items-center border-b-2 border-transparent px-1 pt-1 hover:border-gray-300 hover:text-gray-700">
                      <LanguageSelector />
                    </div> */}
                  </div>
                </div>

                {/* Mobile menu button  */}
                <div className="-mr-2 flex items-center sm:hidden">
                  <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>
              </div>
            </div>

            <Disclosure.Panel className="sm:hidden">
              {navigations &&
                navigations.length > 0 &&
                navigations.map((menu) => {
                  if (menu.activeNavbar)
                    return (
                      <React.Fragment key={menu.slug}>
                        {!menu.children || menu.children.length < 1 ? (
                          <div className="border-gray-200 pt-4 pb-3">
                            <Disclosure.Button
                              as="a"
                              href={menu.href}
                              className={`block border-l-4 py-2 pl-3 pr-4 text-base font-medium ${router.pathname === menu.href
                                ? 'border-indigo-500 bg-indigo-50 text-indigo-700'
                                : 'border-transparent text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700'
                                }`}
                            >
                              {(menu.name)}
                            </Disclosure.Button>
                          </div>
                        ) : (
                          <div className="border-gray-200 pt-4 pb-3">
                            <Disclosure key={menu.slug}>
                              {({ open }) => (
                                <>
                                  <Disclosure.Button
                                    as="a"
                                    className="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700"
                                  >
                                    {(menu.name)}

                                    {open ? (
                                      <ChevronUpIcon
                                        className="inline-flex h-5 w-5"
                                        aria-hidden="true"
                                      />
                                    ) : (
                                      <ChevronDownIcon
                                        className="inline-flex h-5 w-5"
                                        aria-hidden="true"
                                      />
                                    )}
                                  </Disclosure.Button>
                                  {open && (
                                    <>
                                      {menu.children &&
                                        menu.children.length > 0 &&
                                        menu.children.map((subMenu) => {
                                          if (subMenu.activeNavbar)
                                            return (
                                              <React.Fragment
                                                key={subMenu.slug}
                                              >
                                                <Disclosure.Panel>
                                                  <Link href={subMenu.href}>
                                                    <a
                                                      className={`block border-l-8 py-2 pl-3 pr-4 text-base font-medium ${router.pathname ===
                                                        subMenu.href
                                                        ? 'border-indigo-500 bg-indigo-50 text-indigo-700'
                                                        : 'border-transparent text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700'
                                                        }`}
                                                    >
                                                      {(subMenu.name)}
                                                    </a>
                                                  </Link>
                                                </Disclosure.Panel>
                                              </React.Fragment>
                                            )
                                          else return null
                                        })}
                                    </>
                                  )}
                                </>
                              )}
                            </Disclosure>
                          </div>
                        )}
                      </React.Fragment>
                    )
                  else return null
                })}
              <div className="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700">
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
      {/* <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <TopBanner />
      </div> */}
    </>
  )
}
