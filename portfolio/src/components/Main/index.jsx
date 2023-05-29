import { Project } from './section/project'
import { Section1 } from './section/section1'
import { About } from './section/section2'
import { Forms } from './section/forms'

export const Main = () =>{
    return(
        <div>
            <Section1/>
            <About/>
            <Project/>
            <Forms/>
        </div>
    )
}