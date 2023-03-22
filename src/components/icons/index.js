import React from "react";

export function Menu(props) {
	return (
		<div {...props}>
			<svg
				width="24"
				height="24"
				viewBox="0 0 24 24"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path d="M14 8H2" stroke="#1F2725" strokeWidth="2" />
				<path d="M22 16H10" stroke="#1F2725" strokeWidth="2" />
				<path d="M22 8L18 8" stroke="#1F2725" strokeWidth="2" />
				<path d="M6 16L2 16" stroke="#1F2725" strokeWidth="2" />
			</svg>
		</div>
	);
}
export function ArrowDown(props) {
	return (
		<div {...props}>
			<svg
				width="24"
				height="24"
				viewBox="0 0 24 24"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					d="M17 10L13 14L11 14L6.99999 10"
					stroke="#1F2725"
					strokeWidth="2"
				/>
			</svg>
		</div>
	);
}

export function ArrowUp(props) {
	return (
		<div {...props}>
			<svg
				width="24"
				height="24"
				viewBox="0 0 24 24"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					d="M17 14L13 9.99999L11 9.99999L6.99999 14"
					stroke="#1F2725"
					strokeWidth="2"
				/>
			</svg>
		</div>
	);
}

export function ArrowLeft(props) {
	return (
		<div {...props}>
			<svg
				width="24"
				height="24"
				viewBox="0 0 24 24"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					d="M14 18L9 13L9 11L14 5.99999"
					stroke="#1F2725"
					strokeWidth="2"
				/>
			</svg>
		</div>
	);
}
export function ArrowRight(props) {
	return (
		<div {...props}>
			<svg
				width="24"
				height="24"
				viewBox="0 0 24 24"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path d="M10 6L15 11V13L10 18" stroke="#1F2725" strokeWidth="2" />
			</svg>
		</div>
	);
}
export function ArrowExternal(props) {
	return (
		<div {...props}>
			<svg
				width="20"
				height="14"
				viewBox="0 0 20 14"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					d="M14 1L19 6.00001V8.00001L14 13M14 7.00001C10.0948 7.00001 0 7.00001 0 7.00001"
					stroke="#1F2725"
					strokeWidth="2"
				/>
			</svg>{" "}
		</div>
	);
}

export function LinkedIn(props) {
	return (
		<div {...props}>
			<svg
				width="20"
				height="20"
				viewBox="0 0 20 20"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					d="M0 1.4325C0 0.64125 0.6575 0 1.46875 0H18.5312C19.3425 0 20 0.64125 20 1.4325V18.5675C20 19.3587 19.3425 20 18.5312 20H1.46875C0.6575 20 0 19.3587 0 18.5675V1.4325ZM6.17875 16.7425V7.71125H3.1775V16.7425H6.17875ZM4.67875 6.4775C5.725 6.4775 6.37625 5.785 6.37625 4.9175C6.3575 4.03125 5.72625 3.3575 4.69875 3.3575C3.67125 3.3575 3 4.0325 3 4.9175C3 5.785 3.65125 6.4775 4.65875 6.4775H4.67875ZM10.8138 16.7425V11.6988C10.8138 11.4288 10.8337 11.1587 10.9137 10.9662C11.13 10.4275 11.6238 9.86875 12.4538 9.86875C13.54 9.86875 13.9738 10.6962 13.9738 11.9113V16.7425H16.975V11.5625C16.975 8.7875 15.495 7.4975 13.52 7.4975C11.9275 7.4975 11.2137 8.3725 10.8138 8.98875V9.02H10.7938C10.8004 9.00957 10.8071 8.99915 10.8138 8.98875V7.71125H7.81375C7.85125 8.55875 7.81375 16.7425 7.81375 16.7425H10.8138Z"
					fill="#1F2725"
				/>
			</svg>
		</div>
	);
}

export function Twitter(props) {
	return (
		<div {...props}>
			<svg
				width="20"
				height="20"
				viewBox="0 0 20 20"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					d="M6.2825 18.75C13.83 18.75 17.9587 12.4962 17.9587 7.0825C17.9587 6.9075 17.9587 6.73 17.9513 6.555C18.7551 5.9731 19.4488 5.25269 20 4.4275C19.2491 4.75856 18.4535 4.97675 17.6388 5.075C18.4969 4.56204 19.1397 3.75496 19.4475 2.80375C18.6412 3.2814 17.7588 3.61671 16.8387 3.795C16.2202 3.13628 15.4018 2.69989 14.5101 2.55344C13.6185 2.40699 12.7034 2.55865 11.9067 2.98492C11.1099 3.41119 10.476 4.08828 10.1031 4.91132C9.73012 5.73436 9.63897 6.65741 9.84375 7.5375C8.21218 7.45569 6.61602 7.03183 5.1588 6.29343C3.70159 5.55502 2.41586 4.51855 1.385 3.25125C0.861675 4.1551 0.701967 5.22425 0.938308 6.24158C1.17465 7.25891 1.78932 8.14816 2.6575 8.72875C2.00692 8.70664 1.37065 8.53195 0.8 8.21875V8.275C0.801122 9.22185 1.12913 10.1393 1.72859 10.8722C2.32805 11.6051 3.16218 12.1086 4.09 12.2975C3.73783 12.3945 3.37404 12.4429 3.00875 12.4412C2.75123 12.442 2.49423 12.4182 2.24125 12.37C2.50348 13.1851 3.01409 13.8977 3.70156 14.4081C4.38903 14.9185 5.21892 15.2011 6.075 15.2162C4.62069 16.3585 2.82425 16.978 0.975 16.975C0.649151 16.9764 0.323529 16.9576 0 16.9187C1.87689 18.1153 4.05662 18.7507 6.2825 18.75Z"
					fill="#1F2725"
				/>
			</svg>
		</div>
	);
}

export function Instagram(props) {
	return (
		<div {...props}>
			<svg
				width="20"
				height="20"
				viewBox="0 0 20 20"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<g clipPath="url(#clip0_32_9960)">
					<path
						d="M10 0C7.28625 0 6.945 0.0125 5.87875 0.06C4.8125 0.11 4.08625 0.2775 3.45 0.525C2.78262 0.776024 2.17811 1.16978 1.67875 1.67875C1.1701 2.17837 0.776384 2.7828 0.525 3.45C0.2775 4.085 0.10875 4.8125 0.06 5.875C0.0125 6.94375 0 7.28375 0 10.0013C0 12.7163 0.0125 13.0563 0.06 14.1225C0.11 15.1875 0.2775 15.9137 0.525 16.55C0.78125 17.2075 1.1225 17.765 1.67875 18.3212C2.23375 18.8775 2.79125 19.22 3.44875 19.475C4.08625 19.7225 4.81125 19.8912 5.87625 19.94C6.94375 19.9875 7.28375 20 10 20C12.7163 20 13.055 19.9875 14.1225 19.94C15.1863 19.89 15.915 19.7225 16.5513 19.475C17.2182 19.2239 17.8223 18.8301 18.3212 18.3212C18.8775 17.765 19.2188 17.2075 19.475 16.55C19.7213 15.9137 19.89 15.1875 19.94 14.1225C19.9875 13.0563 20 12.7163 20 10C20 7.28375 19.9875 6.94375 19.94 5.87625C19.89 4.8125 19.7213 4.085 19.475 3.45C19.2237 2.78278 18.8299 2.17834 18.3212 1.67875C17.822 1.16959 17.2175 0.775807 16.55 0.525C15.9125 0.2775 15.185 0.10875 14.1213 0.06C13.0538 0.0125 12.715 0 9.9975 0H10.0013H10ZM9.10375 1.8025H10.0013C12.6713 1.8025 12.9875 1.81125 14.0413 1.86C15.0162 1.90375 15.5462 2.0675 15.8988 2.20375C16.365 2.385 16.6987 2.6025 17.0487 2.9525C17.3988 3.3025 17.615 3.635 17.7963 4.1025C17.9338 4.45375 18.0963 4.98375 18.14 5.95875C18.1887 7.0125 18.1987 7.32875 18.1987 9.9975C18.1987 12.6663 18.1887 12.9837 18.14 14.0375C18.0963 15.0125 17.9325 15.5413 17.7963 15.8938C17.6359 16.3279 17.38 16.7205 17.0475 17.0425C16.6975 17.3925 16.365 17.6088 15.8975 17.79C15.5475 17.9275 15.0175 18.09 14.0413 18.135C12.9875 18.1825 12.6713 18.1938 10.0013 18.1938C7.33125 18.1938 7.01375 18.1825 5.96 18.135C4.985 18.09 4.45625 17.9275 4.10375 17.79C3.66937 17.6299 3.27641 17.3745 2.95375 17.0425C2.62094 16.72 2.36465 16.3271 2.20375 15.8925C2.0675 15.5412 1.90375 15.0113 1.86 14.0363C1.8125 12.9825 1.8025 12.6663 1.8025 9.995C1.8025 7.325 1.8125 7.01 1.86 5.95625C1.905 4.98125 2.0675 4.45125 2.205 4.09875C2.38625 3.6325 2.60375 3.29875 2.95375 2.94875C3.30375 2.59875 3.63625 2.3825 4.10375 2.20125C4.45625 2.06375 4.985 1.90125 5.96 1.85625C6.8825 1.81375 7.24 1.80125 9.10375 1.8V1.8025ZM15.3387 3.4625C15.1812 3.4625 15.0251 3.49354 14.8795 3.55384C14.7339 3.61415 14.6017 3.70254 14.4902 3.81397C14.3788 3.9254 14.2904 4.05769 14.2301 4.20328C14.1698 4.34887 14.1388 4.50491 14.1388 4.6625C14.1388 4.82009 14.1698 4.97613 14.2301 5.12172C14.2904 5.26731 14.3788 5.3996 14.4902 5.51103C14.6017 5.62246 14.7339 5.71085 14.8795 5.77116C15.0251 5.83146 15.1812 5.8625 15.3387 5.8625C15.657 5.8625 15.9622 5.73607 16.1873 5.51103C16.4123 5.28598 16.5387 4.98076 16.5387 4.6625C16.5387 4.34424 16.4123 4.03902 16.1873 3.81397C15.9622 3.58893 15.657 3.4625 15.3387 3.4625ZM10.0013 4.865C9.32009 4.85437 8.64362 4.97936 8.01122 5.23268C7.37883 5.486 6.80314 5.86259 6.31769 6.34053C5.83223 6.81847 5.4467 7.38821 5.18355 8.01657C4.9204 8.64494 4.78488 9.31938 4.78488 10.0006C4.78488 10.6819 4.9204 11.3563 5.18355 11.9847C5.4467 12.613 5.83223 13.1828 6.31769 13.6607C6.80314 14.1387 7.37883 14.5153 8.01122 14.7686C8.64362 15.0219 9.32009 15.1469 10.0013 15.1363C11.3494 15.1152 12.6353 14.5649 13.5812 13.6041C14.5272 12.6432 15.0574 11.349 15.0574 10.0006C15.0574 8.65228 14.5272 7.35802 13.5812 6.39719C12.6353 5.43636 11.3494 4.88603 10.0013 4.865ZM10.0013 6.66625C10.8854 6.66625 11.7334 7.01748 12.3586 7.64268C12.9838 8.26788 13.335 9.11583 13.335 10C13.335 10.8842 12.9838 11.7321 12.3586 12.3573C11.7334 12.9825 10.8854 13.3337 10.0013 13.3337C9.11709 13.3337 8.26913 12.9825 7.64393 12.3573C7.01873 11.7321 6.6675 10.8842 6.6675 10C6.6675 9.11583 7.01873 8.26788 7.64393 7.64268C8.26913 7.01748 9.11709 6.66625 10.0013 6.66625Z"
						fill="black"
					/>
				</g>
				<defs>
					<clipPath id="clip0_32_9960">
						<rect width="20" height="20" fill="white" />
					</clipPath>
				</defs>
			</svg>
		</div>
	);
}
