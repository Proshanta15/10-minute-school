import React from 'react'

const SkillAccordion = () => {
    return (
        <>
        <div className="accordion" id="accordionExample">
            <div className="accordion-item">
                <h2 className="accordion-header" id="headingFour">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                 কোর্সটি কীভাবে কিনবো?
                </button>
                </h2>
                <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                <ol>
                    <li>"কোর্সটি কিনুন" বাটনে ক্লিক করুন। পেমেন্ট সম্পন্ন করার পর আপনার একাউন্টে “আপনার কোর্সসমূহ” সেকশনে কোর্সটি চলে আসবে।</li>
                    <li>আপনি যেই ফোন নম্বর বা ইমেইল দিয়ে কোর্সটি কিনতে চান সেটি প্রদান করে “এগিয়ে যান” বাটনে ক্লিক করুন।</li>
                    <li>“প্রশ্ন-চিহ্ন” আইকনে ক্লিক করে পেমেন্ট করার নিয়মটি জেনে নিন।</li>
                    <li>আপনার মোবাইল নাম্বার বা ইমেইল দিয়ে “কোর্সটি কিনুন” অপশনে ক্লিক করুন। </li>
                    <li>পেমেন্ট মেথড নির্বাচন করুন।</li>
                    <li>আপনাকে পেমেন্ট সেকশনে নিয়ে যাওয়া হবে যেখানে আপনার পেমেন্ট করতে পারবেন।</li>
                </ol>
                </div>
            </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header" id="headingFive">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                ইনএক্টিভ একাউন্ট কিভাবে পুনরায় এক্টিভ করব/পাসওয়ার্ড ভুলে গিয়েছি/পাসওয়ার্ড কিভাবে পরিবর্তন করব?
                </button>
                </h2>
                <div id="collapseFive" className="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#accordionExample">
                <div className="accordion-body">
               
                    <p>লগ-ইন করার সময় নিচে "Forget Password/পাসওয়ার্ড ভুলে গিয়েছি" নামে একটি অপশন পাবেন। সেটির মাধ্যমে আপনি পাসওয়ার্ড রিসেট করে নতুন পাসওয়ার্ড নিতে পারবেন। পাসওয়ার্ড রিসেট করার পরে আপনি পুনরায় নতুন পাসওয়ার্ড সেট করতে পারবেন।</p>
               
                </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header" id="headingSix">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
                কোনো টেকনিকাল সমস্যা কিভাবে রিপোর্ট করব?
                </button>
                </h2>
                <div id="collapseSix" className="accordion-collapse collapse" aria-labelledby="headingSix" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                <ol>
                    <li>যেকোনো সমস্যার ক্ষেত্রে, কল করুনঃ ০৯৬১-২০০-১০১০ (দুপুর ২টা - রাত ১০টা)</li>
                    <li>ইমেইল করুনঃ support@10minuteschool.com</li>
                    <li>অথবা এই ফর্মটি পূরণ করুনঃ https://forms.gle/buwAfFXP8V6c7gbY7</li>
                </ol>
                </div>
                </div>
            </div>
        </div>
            
        </>
    )
}

export default SkillAccordion;
