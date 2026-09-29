import { Link } from 'react-router-dom'
import { authCopy } from '../data/landingData'

export function LoginPage() {
  return <main className="auth-page"><section className="auth-panel"><p className="eyebrow">{authCopy.eyebrow}</p><h1>{authCopy.loginTitle}</h1><p>{authCopy.loginDescription}</p><form><label>{authCopy.emailLabel}<input type="email" required /></label><label>{authCopy.passwordLabel}<input type="password" required /></label><button type="submit">{authCopy.signIn}</button></form><p>{authCopy.newMember} <Link to="/signup">{authCopy.createAccount}</Link></p><Link to="/">{authCopy.backHome}</Link></section></main>
}
