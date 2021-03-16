import React from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import LayoutProvider from './layout/LayoutProvider'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Pricing from './pages/Pricing'
import Contact from './pages/Contact'
import LoginSignup from './pages/LoginSignup'
import Faq from './pages/Faq'
import Support from './pages/Support'
import Tutorials from './pages/Tutorials'
import UpdatesChangelogs from './pages/UpdatesChangelogs'
import TermsConditions from './pages/TermsConditions'
import PlanBasic from './pages/PlanBasic'
import PlanStandard from './pages/PlanStandard'
import PlanPremium from './pages/PlanPremium'

const App = () => {
    return (
        <Router>
            <React.Fragment>
                <LayoutProvider>
                    <Header />
                    <>
                        <Route path='/' exact render={(props) => (
                            <>
                                <Home />
                            </>
                        )} />
                        <Route path='/about' component={About} />
                        <Route path='/pricing' component={Pricing} />
                        <Route path='/contact' component={Contact} />
                        <Route path='/login-signup' component={LoginSignup} />
                        <Route path='/faq' component={Faq} />
                        <Route path='/support' component={Support} />
                        <Route path='/tutorials' component={Tutorials} />
                        <Route path='/updates-changelogs' component={UpdatesChangelogs} />
                        <Route path='/terms-conditions' component={TermsConditions} />
                        <Route path='/buy-basic' component={PlanBasic} />
                        <Route path='/buy-standard' component={PlanStandard} />
                        <Route path='/buy-premium' component={PlanPremium} />
                    </>
                    <Footer />
                </LayoutProvider>
            </React.Fragment>
        </Router>
    )
}

export default App
