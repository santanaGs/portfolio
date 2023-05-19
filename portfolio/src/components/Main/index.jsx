import { Project } from './section/project'
import { Section1 } from './section/section1'
import { About } from './section/section2'

export const Main = () =>{
    return(
        <div>
            <Section1/>
            <About/>
            <Project/>
        </div>
    )
}