import Link from 'next/link';

export default function ResidentTaxColumnPage() {
	return (
		<div className="max-w-4xl mx-auto px-4 py-10">
			<h1 className="text-3xl font-bold mb-6">
				副業の住民税と普通徴収の選び方【会社にバレない方法】
			</h1>

			<p className="text-gray-700 leading-relaxed mb-4">
				副業を始めると、所得税だけでなく住民税も増加します。
				特に会社員の場合、住民税の徴収方法によっては本業の勤務先に副業が知られてしまう可能性があります。
				ここでは、住民税の仕組みと普通徴収の選び方、注意点を詳しく解説します。
			</p>

			<h2 className="text-xl font-semibold mb-3">住民税の基本仕組み</h2>
			<p className="text-gray-700 leading-relaxed mb-4">
				住民税は前年の所得に応じて課税される地方税で、毎年6月から翌年5月までの間に納付します。
				給与所得者の場合、通常は「特別徴収」といって、会社が給与から天引きして納付します。
				そのため、会社に副業収入が反映される可能性があります。
			</p>

			<h2 className="text-xl font-semibold mb-3">普通徴収とは何か？</h2>
			<p className="text-gray-700 leading-relaxed mb-4">
				普通徴収は、会社を経由せず自分で住民税を納める方法です。
				自宅に送付される納付書で、自分で4回に分けて納付することができます。
				副業収入がある場合、この普通徴収を選ぶことで会社に副業情報が伝わるリスクを減らすことができます。
			</p>

			<h2 className="text-xl font-semibold mb-3">確定申告での普通徴収選択</h2>
			<p className="text-gray-700 leading-relaxed mb-4">
				副業の所得を確定申告する際に、住民税の徴収方法として「普通徴収」を選択できます。
				申告書の「給与・公的年金以外の所得に係る住民税の徴収方法」の欄で選択するだけです。
				選択を忘れると自動的に特別徴収となり、会社に副業分の住民税が通知されます。
			</p>

			<h2 className="text-xl font-semibold mb-3">普通徴収を選ぶ際の注意点</h2>
			<ul className="list-disc pl-5 mb-4 text-gray-700 leading-relaxed">
				<li>納付期日を自分で管理する必要がある（6月、8月、10月、翌年1月が一般的）</li>
				<li>支払いを怠ると延滞金や督促が発生する</li>
				<li>市区町村により納付方法や書類が異なる場合があるので確認が必要</li>
			</ul>

			<h2 className="text-xl font-semibold mb-3">副業での住民税シミュレーション例</h2>
			<p className="text-gray-700 leading-relaxed mb-4">
				例えば、副業で年間50万円の利益があった場合、住民税はおおむね50万円 × 10％ =
				5万円程度が追加で課税されます。
				これを普通徴収で支払うと、自分で納付書に沿って4回に分けて支払うことになります。
				特別徴収にしてしまうと、会社経由で副業分の住民税が引かれるため、副業が会社に知られる可能性があります。
			</p>

			<h2 className="text-xl font-semibold mb-3">よくある誤解と注意点</h2>
			<ul className="list-disc pl-5 mb-4 text-gray-700 leading-relaxed">
				<li>普通徴収にしても所得税は別途確定申告で納付が必要</li>
				<li>住民税は前年所得に基づくため、今年副業を始めても翌年の税額に反映される</li>
				<li>給与天引きでないため、自分で納付期限を管理しないと延滞になる</li>
			</ul>

			<p className="text-gray-700 leading-relaxed mb-4">
				会社に副業がバレるのを防ぐために普通徴収を選ぶことは有効ですが、税金の支払いを自分で管理する責任も伴います。
				納付書の紛失や期限超過に注意し、必要であれば市区町村の窓口で確認することをおすすめします。
			</p>

			<p className="text-gray-700 leading-relaxed mb-6">
				当シミュレーターでは、副業収入を入力すると、所得税・住民税（普通徴収換算）の概算額を自動計算できます。
				これにより、副業開始前に税負担を把握し、計画的に資金管理が可能です。
			</p>

			<Link
				href="/calculator"
				className="inline-block bg-green-600 text-white px-6 py-3 rounded-lg shadow hover:bg-green-700 transition mt-6"
			>
				▶ 副業の税額を計算してみる
			</Link>
		</div>
	);
}
