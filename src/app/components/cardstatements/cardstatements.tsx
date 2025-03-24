
import React from 'react';


import styles from './cardstatements.module.css';
const CardStatement: React.FC = () => {
  return (
    <>
    <div className={styles.main_card_statement_component}>
        <div className={styles.sub_card_statement_slide}>
            </div>
            <div className={styles.sub_card_statement}>
                <div className={styles.sub_card_statement_inner}>
                    <div className={styles.sub_card_statement_slide2}>
                        </div>
                        <div className={styles.card_statement_canvas_container}>
                            <canvas className={styles.card_statement_canvas}>
                                </canvas>
                                </div>
                                </div>
                                </div>
                                </div>
                                <div className={styles.card_statement_imageloader_container}>
                                    <div className={styles.sub_card_statement_slide3}>
                                        </div>
                                        <div className={styles.card_statement_imageloader_subcontainer}>
                                            <div className={styles.card_statement_imageloader_subcontainer2}>
                                                <div className={styles.sub_card_statement_slide4}>
                                                    </div>
                                                    <div className={styles.card_statement_canvas_subcontainer}>
                                                        <canvas className={styles.card_statement_canvas2}>
                                                            </canvas>
                                                            </div>
                                                            </div>
                                                            </div>
                                                            </div>
                                                            </>
  );
};

export default CardStatement;
