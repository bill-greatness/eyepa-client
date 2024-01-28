import React from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import SearchComponent from '../../components/SearchComponent'

export default function Favorites() {
  return (
    <div className="w-screen h-screen flex flex-col overflow-hidden overflow-y-auto">
        <Header/>
        <SearchComponent/>
        <div className="flex-1">

        </div>
        <Footer/>
    </div>
  )
}
