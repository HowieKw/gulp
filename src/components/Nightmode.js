import { Button } from "../theme";


export default function Nightmode({ theme, themeToggler}) {

    return (
        <section>
            <div>
            <Button className='right' onClick={themeToggler}>
            {theme === 'light' ? (
                <span role="img" label="sun">
                  ☀️
                </span>
              ) : (
                <span role="img" label="moon">
                  🌙
                </span>
              )}
                </Button>
            </div>
        </section>
    )
}