<template>
  <div class="document-template break-before">
    <p class="text-right text-pre">
      Domicile Address:
      ATTN: <span class="preview-field">{{ first_trustee }}</span>, Trustee
      <span class="preview-field">{{ trust_name }}</span>
      7512 Dr. Phillips Blvd. Suite #50-185
      Orlando, Florida, USA
    </p>


    <p class="text-center text-h4 ">
      TRUST INDENTURE
    </p>

    <p class="text-center ma-4">
      For The Irrevocable Declaration Of Trust Titled:
    </p>

    <p class="text-center text-h3">
      {{ trust_name }}
    </p>

    <p class="text-center">
      Dated: <b>{{ moment(document_created_at).format('D YYYY MMMM ') }}</b>
    </p>

    <div style="page-break-after: always"></div>

    <p class="text-center  ">
      TRUST INDENTURE
    </p>

    <p>
      This <span>TRUST INDENTURE</span> Agreement, Conveyance and Acceptance is created and entered into this
      <b>{{ moment(document_created_at).format('Do [day of] MMMM [A.D.], YYYY') }}</b>, between <b>{{ settlor }}</b>, hereinafter called the SETTLOR and
      <b>{{ first_trustee }}</b>, hereinafter called the TRUSTEE and also known as the FIRST TRUSTEE, for the sole benefit of one or more BENEFICIARIES, who shall be named below in
      <b>Schedule B</b> & <b>Meeting Minute Number 2</b>, attached hereto.
    </p>

    <p>
      This TRUST is authorized to exist and function through its Board of Trustees (hereafter BOARD), who are one or more legal persons holding fee simple title to assets, not differentiating between legal and equitable, not as individuals, but collectively as the BOARD who shall operate this TRUST as a PURE TRUST ORGANIZATION under the artificial entity name of:
    </p>

    <p class="text-center text-break">
      <b>{{ trust_name }}</b>
    </p>

    <p>This entity, being domiciled in the jurisdiction of the Republic of Florida, pursuant to Florida Statute 609.01, within the united States of America, shall be managed by the BOARD acting in a fiduciary capacity for the use and benefit of the BENEFICIARY.</p>

    <p>
      This artificial entity hereby stands on its own, holds any and all of its assets in its own name and unlike a corporation, is not owned by another person or entity. It survives on its own, being fully accountable on its own accord. However, a natural living, breathing person must directly or indirectly sign on behalf of this entity in a fiduciary capacity as Trustee.
    </p>

    <p>
      The moment the SETTLOR funds the Trust by contributing its first assets via the control of the Trustee, it breathes artificial life into the entity so that it may stand and act on its own, in its own name, solely responsible for its own actions as would a natural living, breathing person.
    </p>

    <p>
      Nothing contained herein shall be construed as intent to evade or contravene any law, nor to delegate any special power belonging exclusively to company law or a corporation.
    </p>

    <p>
      The roles and responsibilities of the two Parties herein and the terms and conditions set out for the maintenance of this artificial entity are described in this Trust Indenture and is privy only to the two parties to this private contract or as otherwise deemed prudent by the Board. A condensed version is written as the Declaration of Trust and would be readily available to be shown to third parties at the sole discretion of the Board.
    </p>

    <div class="grey lighten-2 pa-2 text-center">
      TERM & INTENT OF TRUST
    </div>

    <ul>
      <li>
        1. The Trust shall exist for a term of ninety-nine (99) years from the date of inception (effective date of this Agreement) and the BOARD may, at any time before the TRUST's expiration, extend its term via an appropriate Meeting Minute.
      </li>
      <li>
        2. The organizational purpose of this TRUST is to sustain and improve this TRUST proactively through any means or business so that the BENEFICIARY may possess the things of life sufficient to provide for growth, health, protection, education, refinement, pro-creation, recreation, welfare, expansion, preservation and continuation and not simply an arrangement to protect and conserve the property for the BENEFICIARY.
      </li>
    </ul>


    <div class="grey lighten-2 pa-2 text-center">
      SETTLOR'S PROVISIONS & RESPONSIBILITIES
    </div>

    <ul>
      <li>
        3. As consideration, the SETTLOR hereby irrevocably assigns and/or conveys as an absolute gift to the BOARD, in trust, certain properties and/or assets to be held in the name and ownership of the TRUST and not by any TRUSTEE, the nature, identity and description of which are presently known to both the SETTLOR and the BOARD, and which shall be further identified and described in Schedule A, hereto attached, in which the BENEFICIARY shall NOT have a vested interest until termination of this TRUST and final distribution of accumulated assets or any early distribution thereof by the BOARD at their sole discretion at any time during the term of this TRUST.
      </li>
      <li>
        4. The SETTLOR agrees and covenants that he shall have no further role to administer or to make decisions as to the management of this TRUST after the effective date of this TRUST. He also affirms that he has no authority to change this TRUST INDENTURE in any manner, nor shall he reserve or retain any dominion or control over the principal or income of this TRUST. Nothing in this paragraph shall be construed as conferring power upon the SETTLOR to reacquire Trust Corpus, or any part thereof by substituting other property of an equivalent value. The moment the SETTLOR signs this private contract, his/her duties and responsibilities related to the TRUST are completed.
      </li>
      <li>
        5. If the SETTLOR performs any role for the TRUST after his/her signing, it can only be in an arm's length relationship via an independent contractor relationship and have nothing to do with direct management functions of the TRUST. If the contracted functions involve any portion of TRUST assets, they must be free of sole discretion over ownership, control or disposition of those assets.
      </li>
      <li>
        6. The SETTLOR affirms and covenants that he shall not, and has not, engage(d) in any secret agreements or prearrangements of any type with the BOARD of this TRUST, that obligates them to act in any manner in their sole interest and not as fair, unbiased, and independent fiduciaries in the best interest of the BENEFICIARY.
      </li>
      <li>
        7. Under no circumstances shall the SETTLOR have any participation interest in any investment made by the BOARD other than such legal interest as would a stranger to the TRUST have in the particular transaction. It is acceptable for the SETTLOR to make a similar or identical investment as the TRUST at the same time that the TRUST shall make its investment(s).
      </li>
      <li>
        8. The SETTLOR may, at any time in the future, assign and/or convey additional assets to the TRUST as additional consideration. Additionally, any outside party, including the BOARD or BENEFICIARY may convey assets to the TRUST by gift, will, exchange, bill of sale, quit claim or by deed, with the consent of the BOARD, to be held for the benefit of the BENEFICIARY with the intent of eventually being distributed to the BENEFICIARY. The title to any assets accepted by the BOARD shall be held in a fiduciary capacity in the name of the TRUST and can only be claimed by the BENEFICIARY to have beneficial, not vested, ownership in those assets.
      </li>
      <li>
        9. A letter from the SETTLOR (hereafter SETTLOR's Statement of Wishes) shall be drafted by the SETTLOR to establish and confirm beneficial ownership of TRUST assets.
      </li>
    </ul>


    <div class="grey lighten-2 pa-2 text-center">
      TRUSTEE'S PROVISIONS & RESPONSIBILITIES
    </div>

    <ul>
      <li>
        10. Because the FIRST TRUSTEE may be just one person on the BOARD, in such instance, the words FIRST TRUSTEE or TRUSTEE can also be referred to hereafter as the BOARD. The FIRST TRUSTEE alone is always considered the BOARD but if other titled officers are also on the BOARD, the BOARD does not always only mean the FIRST TRUSTEE.
      </li>
      <li>
        11. The BOARD accepts said conveyed assets into the name and ownership of the TRUST and not into any TRUSTEE's name and the BOARD presents its own consideration for the TRUST Agreement. The BOARD presents its expertise and knowledge in business and/or as a Trust Manager and shall administer the SETTLOR's wishes in establishing this artificial entity and maintain it for the sole benefit of the BENEFICIARY who is listed in Meeting Minute Number 2 / Schedule B, hereto attached.
      </li>
      <li> 12. The BOARD is authorized to deal with the SETTLOR "at arm's length," to purchase property or to sell property, but always at fair market value and for adequate and full consideration.  </li>
      <li>
        13. The BOARD shall, as it deems proper and necessary, provide for operating funds through any type of borrowing, hypothecation, monetization, either unsecured or directly or indirectly secured, which shall constitute the operating funds of this TRUST. The BOARD may authorize liquidation of assets for the purpose of adding to the operating funds.
      </li>
      <li>
        14. The BOARD shall have all the powers necessary to operate, manage and control this TRUST for the benefit of the BENEFICIARY and shall take any action which it deems necessary and proper to carry out such purposes, provided however, that the BOARD shall not possess any power or take any action contrary to law or inconsistent with the provisions of this TRUST INDENTURE.
      </li>
      <li class="check">
        15. The BOARD shall have sole authority to determine what shall constitute principal of this TRUST, income therefrom, net income distributable under the terms of this TRUST INDENTURE to the BENEFICIARY and to determine which costs, taxes and other expenses shall be paid out of the TRUST assets. All such decisions  by the BOARD shall be conclusive.
      </li>
      <li class="check">
        16. The BOARD shall receive reasonable compensation for their services performed. Any BOARD member may hold two or more offices simultaneously within the TRUST and be deserving of such reasonable compensation for all services rendered at the discretion of the BOARD. However, all TRUSTEES, Trust Managers, other titled offices and executives shall have the right to waive any compensation for their services.
      </li>
      <li class="check">
        17. No bond for the faithful performance of duties shall be required of any BOARD member under this TRUST INDENTURE,  nor shall any bond be required of any subsequent member appointed to the BOARD, unless the BOARD, by appropriate Meeting Minute, requires such of any newly appointed BOARD member(s)
      </li>
      <li class="check">
        18. No member of the BOARD shall possess or exercise a power of administration in a nonfiduciary capacity, nor a power exercisable solely by himself to  vest the corpus or the income therefrom in himself, or any other power, the possession or exercise of which would cause the income of this TRUST to be taxed to any member of the BOARD or to the SETTLOR.
      </li>
      <li class="check">
        19. The BOARD shall, in their fiduciary capacity for this TRUST and not as individuals, assume or incur only such liability as shall attach to the TRUST assets. This liability shall not in any manner jeopardize their individual or personal holdings and for any losses they should suffer for any reason through rendering services as the BOARDthey shall be reimbursed from TRUST assets to the same extent as would non-interested persons, except for any loss sustained by reason of breach of their fiduciary duty.
      </li>
      <li class="check">
        20. The BOARD may assign additional members to this TRUST as they deem necessary and prudent and they may increase or decrease the number of BOARD members as appropriate to the affairs of the TRUST. Said additional members may be necessary for the administration of various tasks associated with this TRUST and not necessarily for additional management decisions unless noted to the contrary in a separate Meeting Minute at the time said additional members are assigned. The appointment term for an additional member is controlled to one (1) year increments and annual appointment renewal may only be authorized by the FIRST TRUSTEE within thirty (30)days or less prior to expiration of said member's appointment.
      </li>
      <li class="check">
        21. All additional TRUSTEES shall be referred to as SECONDARY TRUSTEES. Unless further clarified at the time of their appointment, the FIRST TRUSTEE shall from time-to-time designate specific tasks, roles, duties and/or authorities for which the SECONDARY TRUSTEE shall be consulted or kept apprised.
      </li>
      <li class="check">
        22. All decisions for the management of this TRUST need not be unanimous if more than on TRUSTEE is on the BOARD unless noted to the contrary in this TRUST INDENTURE or in a subsequent Meeting Minute. The FIRST TRUSTEE's decision shall always take priority over any other title if there is dissent. Only a FIRST TRUSTEE can make a decision with their sole signature unless that specific authority is additionally passed down to another title / person on the BOARD in writing (Meeting Minute, Trust Resolution or otherwise).
      </li>
      <li>
        23. Even if there are other currently active Board members, the First Trustee, or equivalent, shall always retain the sole authority, at his/her sole discretion, to amend this Trust Indenture and/or its corresponding Declaration of Trust in any reasonable manner in order to carry out the intended functions of the Board. Said functions can include, but are not limited to, clarifying or rectifying any situation or circumstance of the past, present or future that has not already been addressed therein.
      </li>
      <li>
        24. Any BOARD member shall abstain from voting if benefiting personally or in any other manner from the transaction.
      </li>
    </ul>

    <div class="grey lighten-2 pa-2 text-center">
      ADDITIONAL TRUSTEES, MANAGERS, OFFICERS & CONTRACTORS
    </div>

    <ul>
      <li>
        25. The BOARD may employ, hire or contract with, and pay from these TRUST assets, reasonable compensation to any officer, assistant, aide, contractor, subcontractor, agent, clerk, manager, TRUSTEE, attorney, barrister, solicitor, accountant, broker, investment, tax or other advisor as the BOARD deems necessary and prudent for the expedient and proper function of this TRUST.
      </li>
      <li>
        26. The BOARD may, at its discretion, appoint one or more of its TRUSTEES, or qualified non-Trustees, to the position of Trust Manager(s). Said appointment will also require an appropriate Independent Contractor Agreement to be on file for said title to become effective. Unless otherwise noted, the Trust Manager(s) shall have full authority to manage this TRUST including, but not limited to, the routine day-to-day operations, subject at all times, to the scrutiny of the BOARD. If no Trust Manager is appointed, the FIRST TRUSTEE shall retain all management duties.
      </li>
      <li>
        27. No TRUSTEE, Trust Manager(s), or other titled officer, currently employed, hired or under contract with this TRUST, shall ever be held liable for any action or default of any TRUSTEE, Trust Manager, or other titled officer, or any other person in connection with the administration and management of this TRUST unless caused by the individual's own gross negligence or by commission of a willful act of breach of trust.
      </li>
    </ul>

    <div class="grey lighten-2 pa-2 text-center">
      SUCCESSOR TRUSTEES
    </div>

    <ul>
      <li>
        28. SUCCESSOR TRUSTEES must be named within the first ten (10) Trust Meeting Minutes by the BOARD and said list of preferences shall be strictly adhere to and can only be modified by a FIRST TRUSTEE.
      </li>
      <li>
        29. A SUCCESSOR TRUSTEE may be appointed by a court of competent jurisdiction or by consensus of the remaining TRUSTEES and the Trust Manager(s), if any, and the BENEFICIARY(ies), if of legal age, if circumstances present themselves where there is no SUCCESSOR TRUSTEES capable of taking over upon the death, resignation, incapacitation or removal of any current TRUSTEE. It is at the discretion of the BOARD to replace any TRUSTEE, Trust Manager or other titled officer. Only a FIRST TRUSTEE must be replaced.
      </li>
    </ul>

    <div class="grey lighten-2 pa-2 text-center">
      TRUSTEE REMOVAL FROM OFFICE & RESIGNATION
    </div>

    <ul>
      <li>
        30. Any TRUSTEE, Trust Manager or titled officer shall have the discretionary power to resign from their duties with this TRUST by providing thirty (30) days written notice.
      </li>
      <li>
        31. A SUCCESSOR TRUSTEE may be removed from office for (a) gross neglect of duty as determined by the unanimous vote of the other TRUSTEE(S), (b) by mandate of a court of competent jurisdiction when guilty of fraud, theft, malfeasance in office, or other sufficient legal cause, or (c) by FIRST TRUSTEE based solely on FIRST TRUSTEE's discretion.
      </li>
      <li>
        32. In the event of death, resignation, incapacitation or removal from office of any SUCCESSOR TRUSTEE, the BOARD shall, by unanimous vote, either appoint a SUCCESSOR TRUSTEE or vote to reduce the number of TRUSTEES.
      </li>
      <li>
        33. Changes of Trusteeship for any reason shall not dissolve, terminate or impede the day-to-day operations of this TRUST.
      </li>
    </ul>


    <div class="grey lighten-2 pa-2 text-center">
      DAILY BUSINESS ACTIVITIES
    </div>


    <ul>
      <li>
        34. The BOARD shall open, maintain or close any bank accounts as necessary to receive, hold or transfer any funds for the use by the BOARD and for the benefit of the BENEFICIARY.
      </li>
      <li>
        35. The BOARD may purchase, sell, invest, reinvest, lease, rent, mortgage, insure, repair or improve, at the BOARD's sole discretion, any personal, intangible or real property for the use by the BOARD and for the benefit of the BENEFICIARY.
      </li>
      <li>
        36. The BOARD may sell, liquidate or continue to operate, at the BOARD's sole discretion, any corporation, partnership, limited liability company, any partial interest therein or other business interest, which may be received, acquired, purchased, traded or initiated by this TRUST.
      </li>
      <li>
        37. The BOARD may enforce any and all mortgages, pledges and deeds of Trust held by this TRUST and may borrow funds for any TRUST purpose, encumber, lien, hypothecate, pledge or the equivalent, any TRUST assets at the sole discretion of the BOARD.
      </li>
      <li>
        38. The BOARD may also designate third parties to hold funds or title to TRUST property in another name for specific purposes necessary to the use and operation of this TRUST.
      </li>
      <li>
        39. The BOARD shall initiate or defend, at the BOARD's sole discretion, any litigation affecting this TRUST. The BOARD may also submit to arbitration, compromise, release or otherwise adjust, with or without compensation, any and all claims affecting this TRUST.
      </li>
      <li>
        40. The BOARD shall pay all property taxes, assessments, charges, debts, bills and obligations arising out of the maintenance, operation and administration of this TRUST.
      </li>
      <li>
        41. The BOARD is authorized to pay expenses of TRUSTEES, officers, executives, managers and like persons, incurred while they are on TRUST business. The BOARD is further authorized to create expense accounts for each TRUSTEE, other titled officers, executives, managers and like persons, at the discretion of the BOARD, by appropriate Meeting Minute and authorized and Notarized Board Resolution(s): this expense account can cover any and all personal expenses, to include but not limited to; mortgages, utilities, food, travel, entertainment, etc.
      </li>
      <li>
        42. It is also expressly provided that the BOARD shall not possess or exercise any power, which would, by its possession or exercise, cause the income of this TRUST to be taxed to the SETTLOR or TRUSTEE under the Grantor-Trust provisions of the Internal Revenue Code in the United States.
      </li>
      <li>
        43. Notice shall be given, when appropriate, to all persons or legal entities doing business with, extending credit to, contracting with, or having a claim against this TRUST, that the BOARD is not personally liable when dealing with TRUST property or matters, and such persons must look only to the assets of this TRUST for payment of, or for settlement of any debt, tort, damage, judgment or decree, or for any indebtedness which shall become payable thereunder.
      </li>
      <li>
        44. Anyone lending or paying money to the BOARD must be put on notice that they shall not be obliged to see the application of funds thereof.
      </li>
      <li>
        45. Any BOARD member is authorized to loan or advance funds to this TRUST for any purpose and such transaction, together with stated interest, shall be a first lien against this TRUST and shall be repaid therefrom, so long as any such transaction is recorded in the appropriate Meeting Minutes of this TRUST.
      </li>
      <li>
        46. Any BOARD member is further authorized to deal with this TRUST in general business matters, provided that in all such transactions, the BOARD member retains therein their fiduciary obligation to this TRUST, foremost.
      </li>
      <li>
        47. In any matter for which doing business under this TRUST name is not deemed to be legal, ethical, or without conflict, the BOARD is authorized to do business in the name of individual BOARD members with appropriate reference to their fiduciary capacity, provided that such does not affect the legality of either the business performed or this TRUST itself.
      </li>
    </ul>

    <div class="grey lighten-2 pa-2 text-center">
      CERTIFICATES OF BENEFICIAL OWNERSHIP OF TRUST ASSETS
    </div>

    <ul>
      <li>
        48. Each BENEFICIARY shall be assigned a number of Units of Beneficial Ownership (hereafter UNITS) between one (1) and one hundred (100), of which the sum total of all UNITS shall equal one hundred (100). Said number shall similarly represent the percentage of all TRUST assets to which said BENEFICIARY may claim beneficial ownership. Each UNIT shall represent one percent (1%) of all TRUST assets. There shall never be more or less than 100 UNITS available to the BENEFICIARY (ies).
      </li>
      <li>
        49. A Certificate of Beneficial Ownership (hereafter CERTIFICATE) shall be issued to each BENEFICIARY stating the number of UNITS said BENEFICIARY is entitled to claim. If said BENEFICIARY is a minor or an adult of questionable mental stability, said CERTIFICATE may be held by the BOARD or entrusted with the BENEFICIARY's parent or legal guardian as the situation may apply, at the discretion of the BOARD.
      </li>
      <li>
        50. The dispersion of a CERTIFICATE to a BENEFICIARY or their representative shall be recorded in the official record of the TRUST and the person/entity that physically holds said CERTIFICATE in their possession might also be referred to as the HOLDER
      </li>
      <li>
        51. Said UNITS may be re-divided amongst the BENEFICIARIES at the sole discretion of the BOARD anytime beyond one (1) calendar month after the effective date of this TRUST agreement.
      </li>
      <li>
        52. A BENEFICIARY may be added, removed or replaced, without just cause, at the sole discretion of the FIRST TRUSTEE, anytime beyond one (1) calendar month after the effective date of this TRUST agreement.
      </li>
    </ul>


    <div class="grey lighten-2 pa-2 text-center">
      TRANSFER OF CERTIFICATES OF BENEFICIAL OWNERSHIP
    </div>
    <ul>
      <li>53. In accordance with the purposes of this TRUST, the transfer of CERTIFICATES is strictly limited. The BENEFICIARY only has beneficial interest and not vested interest in TRUST assets.</li>
      <li>54. The lawful HOLDER of any CERTIFICATE (per Section 46 above), as recorded in the records of this TRUST, may transfer, exchange or give that CERTIFICATE to any other person(s) or entity, provided however, that such transfer is not effective unless and until it has been approved by unanimous consent of the BOARD by written and recorded Meeting Minute.</li>
      <li>55. A HOLDER may not receive compensation that could be construed as a sale for his transfer, exchange or gift of a CERTIFICATE to another person or entity.</li>
      <li>56. Approval of a legitimate transfer shall not be unreasonably withheld. However, in accordance with the stated purposes of this TRUST, approval of any transfer may be withheld if, in the opinion of the BOARD, the transfer is an attempt to use the CERTIFICATE as security for a loan of any nature, an attempt at hypothecation, pledge as collateral, lien or assignment of any nature or is otherwise an attempt of the HOLDER or BENEFICIARY to untimely anticipate or force a distributive share of TRUST assets prior to termination of the TRUST or in conflict with the intent of the TRUST.</li>
      <li>57. In any determination concerning the approval or disapproval of any contemplated transfer, the BOARD, in its discretion, may require a sworn statement from the HOLDER concerning the contemplated transfer and his intentions for same. Any determination of the BOARD concerning such approval shall be final.</li>
      <li>58. Any transfer will be effective only after the old CERTIFICATE is surrendered to the BOARD, the transfer is noted in the records of this TRUST and a new CERTIFICATE is dispersed to the new HOLDER.</li>
    </ul>

    <div class="grey lighten-2 pa-2 text-center">
      TRANSFER OF CERTIFICATES UPON DEATH OF BENEFICIARY
    </div>

    <ul>
      <li>59. Any rights possessed by any BENEFICIARY or HOLDER, by reason of his holding a CERTIFICATE, terminate upon the BENEFICIARY'S death unless prior arrangements have been made with the BOARD.</li>
      <li>60. Any BENEFICIARY may file a request with the BOARD naming any person(s) or entity (ies) to whom he desires his CERTIFICATE be transferred upon his death with full rights being transferred to said new BENEFICIARY. Such requests shall be considered and approved in the same manner as other requests for transfer, and prompt notice shall be given to the BENEFICIARY of approval or disapproval and such approval will not be unreasonably withheld.</li>
      <li>61. If, upon the death of any BENEFICIARY, there is contained in the Meeting Minutes of this TRUST, an approved transfer-upon-death form, upon receipt of the proper notice of such death by the BOARD and surrender of the old CERTIFICATE, the BOARD shall note the transfer in the records of this TRUST and issue a new CERTIFICATE according to such approved transfer. If no such transfer-upon-death form exists or approved transfer appears in the Meeting Minutes, then the BOARD shall distribute the UNITS of said CERTIFICATE on a pro-rata basis among the remaining BENEFICIARY (ies).</li>
      <li>62. A Replacement BENEFICIARY shall retain only those rights previously held by a predecessor BENEFICIARY.</li>
      <li>63. The holding of a CERTIFICATE does not entitle the BENEFICIARY or a HOLDER to any management power or rights. Nor shall the death of a BENEFICIARY or transfer by a BENEFICIARY or a HOLDER entitle his heirs, legal representatives, or transferees to demand any division of the property of the TRUST, any special accounting thereof, or entitlement to any special rights whatsoever.</li>
    </ul>


    <div class="grey lighten-2 pa-2 text-center">
      DISTRIBUTION OF TRUST ASSETS
    </div>

    <ul class="check">
      <li>64. The proportionate share of distributed assets to which each BENEFICIARY has a beneficial interest is not discretionary, but is determined solely by the number of UNITES stated on the CERTIFICATE held on their behalf.</li>
      <li>65. The BOARD shall review at each annual meeting its current schedule of distribution of assets, if any, and adjust it if necessary, at the discretion</li>
      <li>66. Any BENEFICIARY may apply to the BOARD for an advance towards future distributions of both income and principal. The BOARD may consider such applications based upon emergency circumstances relating to health, education or maintenance. The BOARD, in its sole discretion, may, at any time, distribute to such BENEFICIARY, any sum which the BOARD feels is consistent with the purposes and intent of this TRUST INDENTURE and the rights of any other BENEFICIARY.</li>
      <li>67. Any such distribution shall be charged to the account of such BENEFICIARY and deducted from any future distribution. Should future distributions be insufficient to cover any such advances, the balance of such advance shall be deducted from any share of TRUST assets to be distributed to such BENEFICIARY upon termination of this TRUST.</li>
      <li>68. Any decision of the BOARD to distribute or not distribute, or as to the sum of any such advance, shall be final.</li>
    </ul>

    <div class="grey lighten-2 pa-2 text-center check">
      COMMUNITY PROPERTY EXCLUSION
    </div>

    <ul class="check">
      <li>69. No accumulation or distribution of TRUST assets or future benefit (hereafter BENEFIT) devolving on any BENEFICIARY under the TRUST terms shall form or constitute a porrtion of any cummunal or joint estate of such BENEFICIARY, but shall instead be and remain the sole, separate and exclusive property of such BENEFICIARY. Should such BENEFICIARY be married or marry in community of property, then the BENEFICIARY's rights to any BENEFIT shall be expressly excluded from the community. A prenuptial agreement between the BENEFICIARY and the soon-to-be spouse shall not be necessary to withhold the BENEFIT from said community. Such BENEFIT shall also be free from the interference, control or marital power of any spouse of such BENEFICIARY. </li>
      <li>70. For the purposes of this Section, the term "benefit" shall include movable and immovable property and the provisions of this Section shall apply moreover not only to the benefit actually delving on such BENEFICIARY, but also to any and all benefits at any time thereafter directly or indirectly acquired by means of the proceeds thereof.</li>
    </ul>

    <div class="grey lighten-2 pa-2 text-center">
      JURISDICTION, DOMICILE ADDRESS & MAILING ADDRESS
    </div>

    <ul>
      <li>71. This TRUST INDENTURE Agreement and TRUST created hereby shall be administered, managed, governed, interpreted and regulated in all respects according to applicable Common Law in the Republic of Florida under the Constitution of the united States of America.</li>
      <li>72. The TRUST shall have its original domicile address located in the city of Orlando, Republic of Florida, in the united States of America.</li>
      <li>73. The domicile, and thereby the controlling interpretational laws under which this TRUST shall be administered, managed, governed, interpreted and regulated, may be changed to any other state or Nation as shall be deemed prudent, wise, necessary or appropriate at any time by the BOARD.</li>
      <li>74. The domicile address and the mailing address do not have to be the same and either may be changed by appropriate Meeting Minute by the BOARD. Changing the mailing address does not automatically change the domicile address unless specifically stated in the appropriate Meeting Minute.</li>
      <li>75. This TRUST shall enjoy the benefits of the Uniform Commercial Code (only when and if applicable and/or allowable to remain under the jurisdiction of Common Law) per, but not limited to, the following citations (or their updated equivalents): section 28: 1-105, TERRITORIAL APPLICATION OF THIS SUBTITLE; PARTIES' POWER TO CHOOSE APPLICABLE LAW, and section 28:1-207, PERFORMANCE OR ACCEPTANCE UNDER RESERVATION OF RIGHTS.</li>
    </ul>


    <div class="grey lighten-2 pa-2 text-center">
      TERMINATION OF TRUST
    </div>


    <ul>
      <li>76. Upon the eventual expiration of the term of this TRUST, this TRUST shall cease to exist and all remaining assets shall be immediately distributed to the BENEFICIARY(IES). In said event, the BOARD shall have the continuing authority to act to wind up the affairs of this TRUST, as is necessary, past the date of expiration. In the event that the Declaration of Trust was recorded, a Notice of Termination shall also be recorded and published as necessary or required.</li>
      <li>77. The BOARD shall pay all remaining obligations of this TRUST and distribute the remaining assets to the BENEFICIARY in direct proportion to the number of UNITS held on their CERTIFICATE. Upon receiving receipts for the distribution of the remaining assets to the BENEFICIARY, the BOARD shall be automatically discharged hereunder, provided that their administration and distributions have been made in accordance with the terms and provisions of this TRUST INDENTURE. Otherwise, a court of competent jurisdiction may be called upon to review and correct any tort or error.</li>
    </ul>

    <div class="grey lighten-2 pa-2 text-center">
      PRIVACY STRICTLY ENFORCED
    </div>

    <ul>
      <li>78. It is imperative that no representative of this TRUST (TRUSTEE, Trust Manager, or other titled officer, etc.) disclose to any member of the general public, private business or counsel, any information pertaining to the BENEFICIARY. It is against the intention and wishes of the SETTLOR for anyone to disclose the identities of any BENEFICIARY of this TRUST. Therefore, no non-officer shall be permitted to view any Meeting Minutes of this TRUST or this TRUST INDENTURE. TRUST Resolutions, however, may be presented to their intended recipients per the discretion of the BOARD.</li>
      <li>79. With the exception to Number 75, above, the BOARD reserves the right to show portions of the TRUST Agreement, this TRUST INDENTURE or Meeting Minutes to appropriate parties if deemed absolutely necessary for the maintenance and well being of the TRUST, especially if being coerced or threatened by authority or if under duress.</li>
    </ul>

    <div class="grey lighten-2 pa-2 text-center">
      BOARD OF TRUSTEE MEETINGS
    </div>

    <ul>
      <li>80. The BOARD shall provide that an annual meeting be held on the tenth (10th) day of January of each year or the Monday following if said day falls on a weekend. The time shall be 9:30 am at a location to be announced by 28 DEC of the immediate prior year.</li>
      <li>81. Special meetings may be called by one or more TRUSTEE upon three (3) days notice, which may be waived by any or all TRUSTEE(s) and/or other titled officers.</li>
      <li>82. All meetings may be held anywhere in the world. Participation and voting at any meeting may be by way of telephone or other electronic process, as well as physical presence, so long as any such voting is followed with a written statement to the non present TRUSTEES, stating the particulars of such vote and a copy of any Meeting Minutes recorded.</li>
    </ul>


    <div class="grey lighten-2 pa-2 text-center ">
      MISCELLANEOUS
    </div>
    <ul>
      <li>83. All pronouns, however stated herein, shall be deemed to refer to the masculine, feminine or neutral gender, singular or plural, as the identity of the PARTY, person(s) or legal entity(ies) may require.</li>
      <li>84. All numbered items are called Numbers. All groupings of Numbers within a bold header topic are collectively called a Section.</li>
      <li>85. In the event that any portion of this TRUST shall be held unlawful, invalid or otherwise inoperative, it is the intention of the SETTLOR that all of the other provisions herein shall continue to be in effect when possible, reasonable and legal.</li>
      <li>86. Any person shall be entitled to rely upon a COPY of the TRUST INDENTURE and any instruments duly executed in accordance with the provisions thereof, to the same extent as the original document if the BOARD approves such COPY.</li>
      <li>87. An approved Meeting Minute of the BOARD and distributed TRUST Resolution authorizing what it is they determine to do or have done shall be sufficient evidence that such an act is within their power to those doing business with this TRUST.</li>
      <li>88. The BOARD shall have the power to amend, modify or replace any portion of this TRUST INDENTURE (via an appropriate Meeting Minute) to better carry out the purposes and intentions thereof, or in order to conform to or comply with any law, rule, regulation or order of any government body, provided that any such amendment may not be inconsistent with the basic TRUST purposes and intentions, and not in derogation of the fiduciary obligations to the BENEFICIARY. No amendment shall be revocable by the SETTLOR or by any other person or entity except the BOARD.</li>
      <li>89. A majority of all the TRUSTEES shall constitute a quorum for conducting business at any meeting</li>
      <li>90. This Trust Indenture consists of thirteen (13) pages.</li>
    </ul>

    <div class="grey lighten-2 pa-2 text-center ">
      ACCEPTANCE BY PARTIES
    </div>
    <ul>
      <li>91. The TRUSTEE, through co-execution of this agreement, signifies confirmation and acceptance of his fiduciary position as TRUSTEE, hereby establishing the BOARD and hereby accepts the terms, conditions and provisions of this TRUST INDENTURE and the Resolutions which are recorded in the Meeting Minutes from time to time, which shall serve as the governing instruments of the BOARD. The signing and acknowledgement of appropriate TRUST Meeting Minutes, if applicable, by subsequently appointed SUCCESSOR TRUSTEES shall constitute their acceptance of this TRUST INDENTURE and TRUST assets in the same manner as the BOARD and the assets and emoluments thereof shall immediately vest in the BOARD as fiduciary for the TRUST without further act or conveyance except as may be required by local law.</li>
      <li>92. The SETTLOR, through co-execution of this TRUST INDENTURE, signifies confirmation and acceptance of his settlement position to this TRUST by providing the initial asset to fund this TRUST and his Statement of Wishes Letter to the BOARD.</li>
      <li>93. IN WITNESS WHEREOF, the parties hereto have hereunder set their hands and seals in acknowledgement and acceptance of, assent to and covenant to abide by all conditions herein imposed and expressed on or after the day first written above.</li>
    </ul>

    <v-container>
      <v-row class="sm-6">
        <v-col>
          <v-text-field
            filled
            persistent-hint
            :hint="`SETTLOR: ${settlor}`"/>
        </v-col>
        <v-col>
          <v-text-field
            filled
            persistent-hint
            :hint="`FIRST TRUSTEE: ${first_trustee}`"/>
        </v-col>
      </v-row>

      <v-row>
        <v-col class="sm-6">
          <div>
            NOTARY Public, Weber County <br/>
            State of Utah
          </div>
        </v-col>
        <v-col class="sm-6">
          <div>
            NOTARY Public, Weber County <br/>
            State of Utah
          </div>
        </v-col>
      </v-row>

      <v-row class="sm-6">
        <v-col>
          <h4 class="mb-5">WITNESS:</h4>

          <v-text-field
            filled
            persistent-hint
            hint="Notary Public PRINT NAME"/>
          <v-text-field
            filled
            persistent-hint
            hint="Notary Public SIGNATURE:"/>
        </v-col>

        <v-col>
          <h4 class="mb-5">WITNESS:</h4>

          <v-text-field
            filled
            persistent-hint
            hint="Notary Public PRINT NAME:"/>
          <v-text-field
            filled
            persistent-hint
            hint="Notary Public SIGNATURE:"/>
        </v-col>
      </v-row>

      <v-row class="sm-6" style="height: 60mm; background: #f1f1f1;">
        <v-col>
          <div>
            Notary Stamp / Seal:
          </div>
        </v-col>

        <v-col>
          <div>
            Notary Stamp / Seal:
          </div>
        </v-col>
      </v-row>
    </v-container>
    <div class="break-after"></div>
  </div>
</template>

<script>
  import moment from 'moment';

  export default {
    props: {
      client: {
        type: Object,
        required: true
      },
      project: {
        type: Object,
        required: true
      }
    },
    computed: {
      document_created_at() {
        return this.project?.document_data?.document_created_at || new Date();
      },
      first_trustee() {
        return this.project?.document_data?.first_trustee || `${this?.client?.first_name} ${this?.client?.last_name}`;
      },
      trust_name() {
        return this.project?.document_data?.trust_name || this?.project?.name;
      },
      settlor() {
        return this.project?.document_data?.settlor;
      }
    },
    methods: {
      moment
    }
  };
</script>

<style scoped>
.check{
  color:red
}
</style>
