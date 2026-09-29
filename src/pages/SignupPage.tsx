import { Link } from 'react-router-dom'
import { authCopy } from '../data/landingData'

export function SignupPage() {
  return <main className="auth-page"><section className="auth-panel"><p className="eyebrow">{authCopy.eyebrow}</p><h1>{authCopy.signupTitle}</h1><p>{authCopy.signupDescription}</p><form><label>{authCopy.nameLabel}<input type="text" required /></label><label>{authCopy.emailLabel}<input type="email" required /></label><label>{authCopy.passwordLabel}<input type="password" minLength={8} required /></label><button type="submit">{authCopy.createAccount}</button></form><p>{authCopy.existingMember} <Link to="/login">{authCopy.signIn}</Link></p><Link to="/">{authCopy.backHome}</Link></section></main>
}
