import React from "react";
import SubHeader from "../components/SubHeader/SubHeader.jsx";
import FrontDashboard from "../components/FrontDashboard/FrontDashboard";
import EditBar from "../components/EditBar/EditBar.jsx";
import RearDashboard from "../components/RearDashboard/RearDashboard"
import styles from './IndexPage.module.css'; // Ensure correct import path
import SidePanel from "../components/SidePanel/SidePanel"


const IndexPage = () => {
    return (
        <div>
            <SubHeader />
            <FrontDashboard />
            <EditBar />
           <SidePanel/>
            <div className={styles.scrollableText}>
                <h1>Welcome to my react app</h1>
                <p>
                    Cooking eggs in a pan is a fundamental                             culinary skill, offering a quick, nutritious, and versatile meal option suitable for breakfast, lunch, or dinner. This essay will guide you through the basic steps of frying an egg, highlighting the versatility of this method and offering tips to perfect the art of egg frying. Whether you prefer them sunny side up, over easy, or over hard, mastering the simple technique of cooking eggs on a pan can significantly broaden your culinary prowess.

                    ### The Essentials of Frying Eggs

                    **1. Choosing the Right Pan:**
                       A non-stick frying pan is ideal for cooking eggs because it prevents the egg from sticking and makes cleanup easier. The size of the pan is also important; a smaller pan is perfect for cooking a single egg, while a larger one can accommodate multiple eggs without them touching.

                    **2. Preparing the Pan:**
                       Before adding the egg, heat your pan over medium heat. Heating the pan before adding fat prevents the fat from burning. Once the pan is warm, add a small amount of oil or butter. Butter provides a rich flavor, while oils like olive or coconut oil offer a healthier alternative without compromising on the non-stick quality.

                    **3. Cracking the Egg:**
                       To avoid shells in your cooked egg, it is recommended to crack the egg into a small bowl first. From there, you can gently pour the egg into the center of the heated pan. This method ensures the egg keeps its shape and the yolk remains intact if desired.

                    **4. Cooking Techniques:**
                       - **Sunny Side Up:** After pouring the egg into the pan, let it cook undisturbed. You’ll know it’s ready when the edges turn golden and the whites are completely set, but the yolk remains runny. This usually takes about 2 to 3 minutes.
                       - **Over Easy:** Once the egg whites have set, carefully flip the egg over using a spatula to briefly cook on the other side. This method cooks the yolk slightly but leaves it mostly runny, typically requiring about 30 additional seconds.
                       - **Over Hard:** After flipping the egg, let it cook for a few minutes until the yolk is completely firm. This method is perfect for those who prefer a fully-cooked yolk.

                    **5. Seasoning:**
                       Simple seasoning with salt and pepper can greatly enhance the natural flavors of the egg. It’s best to season right after the eggs are done cooking, as salt can sometimes cause the whites to break down if added too early.

                    **6. Serving:**
                       Once cooked to your liking, use a spatula to gently lift the egg from the pan and transfer it to a plate. Eggs cooked in a pan are incredibly versatile, pairing well with toast, rice, vegetables, or even incorporated into a sandwich.

                    ### Tips for Perfecting Pan-Cooked Eggs

                    - **Temperature Control:** Keeping the heat at medium ensures that the egg cooks evenly without burning. High heat can toughen the proteins in the egg, resulting in a rubbery texture.
                    - **Freshness Matters:** Fresh eggs are easier to fry as they hold their shape better. As eggs age, the whites thin out and spread more in the pan.
                    - **Experiment with Fats:** Each type of fat can add a different flavor profile to your egg. Trying different oils or butter can turn an ordinary fried egg into a delightful meal.
                    - **Non-Stick Tools:** Use a silicone or plastic spatula for flipping eggs, especially if using a non-stick pan, to avoid scratching the surface.

                    Mastering the art of cooking eggs on a pan not only provides a fundamental culinary technique but also introduces an element of creativity to everyday cooking. By perfecting your approach to this simple dish, you can enjoy a delicious and satisfying meal any time of the day with minimal effort and maximum flavor.
                </p>
                {/* Additional paragraphs or content can go here */}            
            </div>
            <RearDashboard/>
        </div>
    );
};

export default IndexPage;