package samplesite.pages

import components.*
import components.layout.navigationlayout.MdlContent
import components.layout.navigationlayout.content
import components.layout.grid

object About : MdlContent {
    override val content = content("About") {
        setAttribute("style", " background: url('images/whoiam.jpg') center / cover; filter: alpha(opacity=60); padding: 10px;")

        grid {
            cell(3) {}

            cellCard(6) {
                title = "About me"
                supportingText = "Completely self-taught, I began my love for writing code when I was you kid and found out about QBasic on the family computer. In my day to day life, I enjoy keeping up with new developments within the technology and android community. I am very passionate about clean thought out architecture in the code I write. And believe strongly in testing as much as possible. Even on Android where it's not the easiest to accomplish."
            }

            cell(3) {}

            cell(1) {}
            cell(10) {
                chip(contact = true) { src = "images/java-logo.png"; text = "Java" }
                chip(contact = true) { src = "images/kotlin-logo.png"; text = "Kotlin" }
                chip(contact = true) { src = "images/android-logo.png"; text = "Android Native" }
                chip(contact = true) { src = "images/rxjava-logo.png"; text = "RxJava" }
                chip(contact = true) { src = "images/javascript-logo.png"; text = "JavaScript" }
                chip(contact = true) { src = "images/react-logo.png"; text = "React Native" }
                chip(contact = true) { src = "images/unity-logo.png"; text = "Unity3D" }
                chip { text = "Junit" }
                chip(contact = true) { src = "images/mockito-logo.png"; text = "Mockito" }
            }
            cell(1) {}

            cellCard(4) {

                size()
                title = "Rithmio"
                supportingText = "Mar 2016 — present"
                mainElement.list {
                    item(ListIem("-At Rithmio I Introduced new technologies like Kotlin and RxJava which have helped to make the team faster and more efficient."))
                    item(ListIem("-Rithmio EDGE: I designed a new architecture based on Flux style circular data streams that made the code base more testable and stable."))
                    item(ListIem("-Cadence Counter: I built a prototype app from the ground up that had a strict two-week window of completion. I was able to complete it in only a week giving the project an extra week for testing. "))
                }

            }

            cellCard(4) {
                size()
                title = "MeetBall"
                supportingText = "Jun 2015 — Mar 2016"
                mainElement.list {
                    item(ListIem("-At MeetBall I was the sole Android developer took over code base from a contractor and quickly moved the code a more structured testable state."))
                    item(ListIem("-Integrated Beacon awareness into the app using the Radius Networks SDK"))
                }
            }

            cellCard(4) {
                title = "Tinker Entertainment"
                supportingText = "Sep 2014 — Nov 2014"
                mainElement.list {
                    item(ListIem("While defunct, I picked up this project for my friend’s new company venture when his original developer dropped out. With the game’s code base written in C# and using the Unity3D framework, I quickly adapted myself to the language and provided an initial product release."))
                }
            }
        }
    }
}

