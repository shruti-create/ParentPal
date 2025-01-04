import styles from "./page.module.css";
import "./globals.css"


export default function Home() {
  return (
    <div >
      <h2 style={{ color: 'var(--accent-text-color)' }}> Welcome to ParentPal: Your Trusted Companion on the Parenting Journey!</h2>
      <br/>

      <button className="outline-button">Sign up!</button>

      <button className="outline-button">Log in.</button>

      <br/>
      <br/>


      <p>At ParentPal, we're dedicated to supporting new parents by offering a range of helpful features that make your parenting experience smoother and more informed. Here's a quick overview of what you'll find on our platform:</p> 
      <br/>
      <ul>
        <li>Educational Resources: Access expert-led “how-to” videos and articles to guide you through the early stages of parenting with confidence.</li>
        <li>Anonymous Confession Section: A safe space to share your parenting struggles and concerns without judgment—no comments, just understanding.</li>
        <li>Advice from Fellow Parents: Ask questions, get advice, and share your experiences with a community of parents who understand.</li>
        <li>Budget Upcycling: Find affordable baby items from parents who are passing along gently used goods—perfect for budget-conscious families!</li>
        <li>Doctor’s Answer Forum: A place to get trusted health-related advice directly from pediatricians. (Premium service unless we can offer volunteer support.)</li>
        <li>Virtual Support Groups: Join groups focused on specific parenting challenges, moderated by professionals who can offer guidance. (Premium service unless we can offer volunteer support.)</li>
        <li>Therapist Directory: Explore a list of therapists who specialize in family and parenting issues. You can read reviews, find the right professional for you, and book appointments directly. (Paid service on an individual basis.)</li>
      </ul>
      <br/>
      <p>ParentPal is here to help you navigate the ups and downs of parenting, providing support, education, and community along the way.</p>

    </div>
  );
}
