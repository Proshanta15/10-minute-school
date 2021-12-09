import React from 'react'


const BookAccordion = () => {
    return (
        <>
        <div className="accordion" id="accordionExample">
            <div className="accordion-item">
                <h2 className="accordion-header" id="headingOne">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                বইটি কীভাবে কিনবো?
                </button>
                </h2>
                <div id="collapseOne" className="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                <ol>
                    <li><p>“বইটি কিনুন" বাটনে ক্লিক করুন</p></li>
                    <li><p>আপনি যেই ফোন নম্বর বা ইমেইল দিয়ে বইটি কিনতে চান সেটি প্রদান করে “এগিয়ে যান” বাটনে ক্লিক করুন</p></li>
                    <li><p>আপনার ইতিমধ্যে 10 Minute School এ একাউন্ট থেকে থাকলে আপনি সরাসরি বইটি কিনে ফেলতে পারবেন</p></li>
                    <li><p>একাউন্ট না থাকলে আপনি যেই ফোন/ ইমেইল দিয়েছেন সেখানে একাউন্ট তৈরি হয়ে যাবে</p></li>
                    <li><p>পেমেন্ট সম্পন্ন করার পর আপনার একাউন্ট থেকে থাকলে সেখানে "আপনার বইসমূহ" সেকশনে বইটি চলে আসবে</p></li>
                    <li><p>নতুন একাউন্ট হলে বই কেনার পরে আপনাকে ইমেইল/এসএমএস এর মাধ্যমে আপনার লগইন ডিটেইলস পাঠিয়ে দেওয়া হবে </p></li>
                    <li><p>আপনার তথ্যাদি দেওয়ার পর “বইটি কিনুন” বাটনে ক্লিক করুন</p></li>
                    <li><p>পেমেন্ট করার পূর্বে “প্রশ্ন-চিহ্ন” আইকনে ক্লিক করে সম্পূর্ন নিয়মটি আবারো জেনে নিতে পারেন</p></li>
                    <li><p>আপনার মোবাইল নাম্বার বা ইমেইল দিয়ে “কোর্সটি কিনুন” অপশনে ক্লিক করুন</p></li>
                    <li><p>পেমেন্ট মেথড নির্বাচন করুন</p></li>
                    <li><p>আপনাকে পেমেন্ট সেকশনে নিয়ে যাওয়া হবে যেখানে আপনার পেমেন্ট করতে পারবেন</p></li>
                    <li><p>পেমেন্ট সম্পন্ন করার পর আপনার এন্ড্রোয়েড ফোনে 10 Minute School Mobile App ডাউনলোড করুন</p></li>
                    <li><p>আপনার একাউন্টে লগ ইন করে “আপনার বইসমূহ” সেকশন থেকেই বইটি পড়তে পারবেন</p></li>
                    <li><p>এ্যাপের ভেতর থেকেই আপনি বইটি পড়তে পারবেন, অতিরিক্ত কোনো পিডিএফ রিডার/ডাউনলোডার লাগবে না</p></li>
                   
                </ol>
                </div>
            </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header" id="headingTwo">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                ইনএক্টিভ একাউন্ট কিভাবে পুনরায় এক্টিভ করব/পাসওয়ার্ড ভুলে গিয়েছি/পাসওয়ার্ড কিভাবে পরিবর্তন করব?
                </button>
                </h2>
                <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                <p>লগ-ইন করার সময় নিচে "Forget Password / পাসওয়ার্ড ভুলে গিয়েছি" নামে একটি অপশন পাবেন। সেটির মাধ্যমে আপনি পাসওয়ার্ড রিসেট করে নতুন পাসওয়ার্ড নিতে পারবেন। পাসওয়ার্ড রিসেট করার পরে আপনি পুনরায় নতুন পাসওয়ার্ড সেট করতে পারবেন।</p>
                </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header" id="headingThree">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                কোনো টেকনিকাল সমস্যা কিভাবে রিপোর্ট করব?
                </button>
                </h2>
                <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                <p>যেকোনো সমস্যার ক্ষেত্রে, কল করুনঃ ০৯৬১-২০০-১০১০ (দুপুর ২টা - রাত ১০টা)</p>
                <p>ইমেইল করুনঃ support@10minuteschool.com</p>
                <p>অথবা এই ফর্মটি পূরণ করুনঃ https://forms.gle/buwAfFXP8V6c7gbY7</p>
                </div>
                </div>
            </div>
        </div>
            
        </>
    )
}

export default BookAccordion
