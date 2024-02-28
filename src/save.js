/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';

/**
 * The save function defines the way in which the different attributes should
 * be combined into the final markup, which is then serialized by the block
 * editor into `post_content`.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#save
 *
 * @return {WPElement} Element to render.
 */
export default function save( { attributes } ) {
	const { modalId, triggerType, triggerText, triggerButtonStyle, triggerIcon, triggerIconStyle, triggerIconColor, triggerJustification, modalHeading } = attributes;
	const modalTitleLabel = modalId + "-title";

	return (
		<div {...useBlockProps.save()}>
			<div className={ `uofi-modal-trigger-wrapper ${triggerJustification}` }>
				{ triggerType == 'button' ? (
					<button className={ `uofi-modal-trigger il-button ${triggerButtonStyle}` } data-modal-target={ modalId } >
						{ triggerText }
					</button>
				) :
				(
					<button type="button" className="uofi-modal-trigger uofi-modal-icon-button" title={ `Open ${modalHeading} Modal` } aria-label={ `Open ${modalHeading} modal` } data-modal-target={ modalId } >
						<span className={ `uofi-modal-icon ${triggerIconStyle} ${triggerIconColor}` }>{ triggerIcon }</span>
					</button>
				) }
			</div>

			<div className="uofi-modal il-formatted" id={ modalId } aria-labelledby={ modalTitleLabel } tabIndex="-1" aria-hidden="true" style="display:none;">
				<div className="uofi-modal-content">
					<div className="uofi-modal-header">
						<h2 id={ modalTitleLabel }>{ modalHeading }</h2>
						<button type="button" className="uofi-modal-close-btn" title="Close modal" aria-label="Close modal"><span className="il-icon">cancel</span></button>
					</div>

					<InnerBlocks.Content/>

					<div className='uofi-modal-footer'>
						<button type="button" className='uofi-modal-close-btn il-button'>Close</button>
					</div>
				</div>
			</div>
		</div>
	);
}
