import Auth from '~/core/layout/auth'
import Blank from '~/core/layout/blank'
import Default from '~/core/layout/default'

export const LAYOUTS = Object.freeze({
  DEFAULT: 'default',
  BLANK: 'blank',
  AUTH: 'auth',
})

export const LAYOUT_COMPONENTS = {
  [LAYOUTS.DEFAULT]: (props) => <Default>{props.children}</Default>,
  [LAYOUTS.BLANK]: (props) => <Blank>{props.children}</Blank>,
  [LAYOUTS.AUTH]: (props) => <Auth>{props.children}</Auth>,
}

export const DEFAULT_LAYOUT = LAYOUTS.DEFAULT

export const NAVBAR_HEIGHT = 100